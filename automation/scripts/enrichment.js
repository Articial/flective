require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');
const csvParser = require('csv-parser');
const { createObjectCsvWriter } = require('csv-writer');
const OpenAI = require('openai');

const DATA_DIRECTORY = path.resolve(__dirname, '..', 'data');
const INPUT_CSV = path.join(DATA_DIRECTORY, 'leads.csv');
const OUTPUT_CSV = path.join(DATA_DIRECTORY, 'leads_enriched.csv');

const SYSTEM_PROMPT = `Kamu adalah strategi marketing lokal senior untuk pasar Indonesia.
Untuk setiap bisnis yang diberikan, buat 3 hal dalam Bahasa Indonesia:

1. DIAGNOSIS (maks 60 kata): apa yang salah dari online presence
mereka dan revenue yang bocor karenanya. Konkret, tanpa buzzword.

2. SITE_BRIEF (maks 120 kata): angle hero, layanan utama yang
ditonjolkan, tone yang cocok untuk industri ini di Indonesia,
CTA yang konversi (selalu arahkan ke WhatsApp), 1 pilihan desain
yang membedakan dari kompetitor lokal. Mobile-first karena
mayoritas traffic Indonesia dari HP.

3. PESAN_WA (maks 65 kata): buka dengan 1 observasi spesifik
tentang bisnis INI, sebut layanan atau lokasi mereka, tutup dengan
soft ask untuk lihat mockup. Bahasa Indonesia santai tapi
profesional. Jangan sebut AI, Claude, atau tools apapun.
Jangan pakai salam "Bapak/Ibu" di awal, cukup nama depan.

Return ONLY valid JSON with keys: diagnosis, site_brief, pesan_wa
No markdown, no explanation, just raw JSON.`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizePhone(value) {
  return String(value || '').replace(/[^\d]/g, '');
}

async function readCsvRows(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const rows = [];
  await pipeline(
    fs.createReadStream(filePath),
    csvParser(),
    async function* collect(source) {
      for await (const row of source) {
        rows.push(row);
      }
    }
  );

  return rows;
}

function safeParseOpenAiJson(rawText) {
  const clean = String(rawText || '').trim();

  try {
    return JSON.parse(clean);
  } catch (_err) {
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error('Respons OpenAI bukan JSON valid.');
    }
    return JSON.parse(match[0]);
  }
}

function ensureFields(result) {
  const diagnosis = String(result?.diagnosis || '').trim();
  const siteBrief = String(result?.site_brief || '').trim();
  const pesanWa = String(result?.pesan_wa || '').trim();

  if (!diagnosis || !siteBrief || !pesanWa) {
    throw new Error('Field JSON wajib (diagnosis, site_brief, pesan_wa) tidak lengkap.');
  }

  return {
    diagnosis,
    site_brief: siteBrief,
    pesan_wa: pesanWa,
  };
}

async function enrichLead(client, lead) {
  const userPayload = {
    nama_bisnis: String(lead.nama_bisnis || '').trim(),
    nomor_wa: String(lead.nomor_wa || '').trim(),
    website: String(lead.website || '').trim(),
    kota: String(lead.kota || '').trim(),
    niche: String(lead.niche || '').trim(),
    catatan_unik: String(lead.catatan_unik || '').trim(),
  };

  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    max_tokens: 700,
    temperature: 0.3,
    messages: [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      {
        role: 'user',
        content: JSON.stringify(userPayload, null, 2),
      },
    ],
  });

  const rawText = String(response.choices?.[0]?.message?.content || '').trim();

  const parsed = safeParseOpenAiJson(rawText);
  return ensureFields(parsed);
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY belum diset. Isi dulu di file .env.');
  }

  if (!fs.existsSync(INPUT_CSV)) {
    throw new Error('File leads.csv tidak ditemukan.');
  }

  const client = new OpenAI({ apiKey });

  const allLeads = await readCsvRows(INPUT_CSV);
  if (allLeads.length === 0) {
    console.log('Tidak ada lead di leads.csv.');
    return;
  }

  const existingEnriched = await readCsvRows(OUTPUT_CSV);
  const existingPhones = new Set(
    existingEnriched
      .map((row) => normalizePhone(row.nomor_wa))
      .filter((phone) => phone.length > 0)
  );

  const pendingLeads = allLeads.filter((lead) => {
    const phone = normalizePhone(lead.nomor_wa);
    return phone.length > 0 && !existingPhones.has(phone);
  });

  if (pendingLeads.length === 0) {
    console.log('Semua lead sudah diproses. Tidak ada data baru.');
    return;
  }

  const outputExists = fs.existsSync(OUTPUT_CSV) && fs.statSync(OUTPUT_CSV).size > 0;
  const csvWriter = createObjectCsvWriter({
    path: OUTPUT_CSV,
    append: outputExists,
    header: [
      { id: 'nama_bisnis', title: 'nama_bisnis' },
      { id: 'nomor_wa', title: 'nomor_wa' },
      { id: 'website', title: 'website' },
      { id: 'kota', title: 'kota' },
      { id: 'niche', title: 'niche' },
      { id: 'catatan_unik', title: 'catatan_unik' },
      { id: 'diagnosis', title: 'diagnosis' },
      { id: 'site_brief', title: 'site_brief' },
      { id: 'pesan_wa', title: 'pesan_wa' },
      { id: 'status', title: 'status' },
    ],
  });

  for (let i = 0; i < pendingLeads.length; i += 1) {
    const lead = pendingLeads[i];
    const businessName = String(lead.nama_bisnis || 'Tanpa Nama').trim();
    console.log(`Processing ${i + 1}/${pendingLeads.length}: ${businessName}...`);

    try {
      const enriched = await enrichLead(client, lead);
      const record = {
        nama_bisnis: String(lead.nama_bisnis || '').trim(),
        nomor_wa: String(lead.nomor_wa || '').trim(),
        website: String(lead.website || '').trim(),
        kota: String(lead.kota || '').trim(),
        niche: String(lead.niche || '').trim(),
        catatan_unik: String(lead.catatan_unik || '').trim(),
        diagnosis: enriched.diagnosis,
        site_brief: enriched.site_brief,
        pesan_wa: enriched.pesan_wa,
        status: 'pending',
      };

      await csvWriter.writeRecords([record]);
      existingPhones.add(normalizePhone(record.nomor_wa));
    } catch (error) {
      console.error(`Gagal memproses ${businessName}: ${error.message}`);
    }

    if (i < pendingLeads.length - 1) {
      await sleep(1000);
    }
  }

  console.log('Proses enrichment selesai.');
}

main().catch((error) => {
  console.error(`Error fatal: ${error.message}`);
  process.exit(1);
});
