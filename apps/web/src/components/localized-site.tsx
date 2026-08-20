import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";

export type Locale = "id" | "en";
const copy = {
  en: {
    nav: ["Audit", "Services", "Work", "About"],
    cta: "Get a Growth Audit",
    language: "Bahasa Indonesia",
    heroLabel: "Flective / Digital Growth Partner",
    heroTitle: <>Turn customer intelligence<br />into measurable <em>growth.</em></>,
    heroText: "We combine growth strategy, customer insight, and high-performing digital execution — so the next move you make is the one that matters.",
    heroProof: "For businesses and e-commerce teams with activity, but not enough clarity.",
    heroStats: [
      { value: "100%", label: "Evidence-based recommendations", note: "No guesswork — every insight is traced to your data" },
      { value: "1 team", label: "Strategy + intelligence + execution", note: "From diagnosis to delivery without hand-offs" },
      { value: "30 days", label: "To a clear priority plan", note: "A short list of what to fix first, ready to execute" },
    ],
    heroCtaPrimary: "Book a Growth Conversation",
    heroCtaSecondary: "See the problems we solve",
    problemsEyebrow: "Does this sound familiar?",
    problemsTitle: "You do not always need more marketing. You may need to see what is already getting in the way.",
    problemsLead: "Before another campaign, redesign, or tool, find the friction that is quietly costing you opportunities.",
    problems: [
      "Your website gets visits, but not enough serious enquiries.",
      "You spend on marketing, but cannot clearly tell what is paying back.",
      "Your team has plenty of ideas, but no shared priority for the next 30 days.",
      "Your data lives in different places, so decisions still depend on instinct.",
    ],
    offerEyebrow: "Start here / Fixed-scope offer",
    offerTitle: "Growth Audit",
    offerLead: "A focused review of your website, store, customer journey, and visible performance signals—so you know what to fix first.",
    offerCard: "Find the five changes most likely to improve your next 30 days.",
    outcomes: [
      "A clearer view of where growth is leaking",
      "A short list of what to fix first",
      "A practical plan your team can execute",
    ],
    offerLink: "See what the audit includes",
    methodEyebrow: "How the work connects",
    methodTitle: "Understand the problem before building the answer.",
    method: [
      ["01", "Diagnose", "Find the problem behind the symptom."],
      ["02", "Prioritize", "Choose the move with the clearest upside."],
      ["03", "Build", "Make the improvement real in the tools you use."],
      ["04", "Measure", "Learn what changed and what comes next."],
    ],
    capabilitiesEyebrow: "What we can help with",
    capabilitiesTitle: "One partner across the growth bottleneck.",
    workEyebrow: "Proof, not promises",
    workTitle: "Useful work creates the evidence.",
    workLead: "We are building a body of work around real business problems. Every case study will show the context, decision, execution, and verified impact.",
    philosophyEyebrow: "The principle behind the work",
    philosophy: <>Reflect.<br />Reframe.<br />Grow.</>,
    philosophyText: "Good growth starts by seeing the situation clearly enough to make the next decision count.",
    processEyebrow: "The first engagement",
    processTitle: "A clear process, without the agency theatre.",
    process: [
      ["01", "Share the context", "Tell us what you sell, where customers come from, and what feels stuck."],
      ["02", "We find the friction", "We review the journey, signals, and market context around the problem."],
      ["03", "You get the next moves", "Receive a concise priority plan—with implementation support when useful."],
    ],
    faqEyebrow: "Questions, answered",
    faqTitle: "What you are probably wondering.",
    faqLead: "Do not find your answer? Ask us directly.",
    faqs: [
      { q: "What is the Growth Audit?", a: "A fixed-scope review of your website, store, customer journey, and visible performance signals. You get a priority plan for the next 30 days — not a generic report." },
      { q: "How long does it take?", a: "The audit runs within 30 days from kickoff. Most of the work happens on our side; you share context and access once." },
      { q: "We need execution, not just a report — can you help?", a: "Yes. The audit is the starting point, but we also build: websites, journeys, dashboards, and automations. You decide the scope after you see the plan." },
      { q: "What does it cost?", a: "Fixed scope, fixed price. We share the investment before you commit — no surprises, no hourly billing." },
      { q: "Is our data safe?", a: "We work under a clear confidentiality agreement. Your data stays yours; we only use it to build the plan." },
      { q: "Why Flective instead of a bigger agency?", a: "We keep the team senior and the scope small, so your problem gets direct attention — not a junior team and a long chain of account managers." },
    ],
    finalEyebrow: "Take the first step",
    finalTitle: "Know what to fix before you spend more.",
    finalText: "Share the context. We will help you decide whether an audit is the right next move.",
    seeProblems: "See the problems we solve",
    seeOffer: "View the offer",
    seeWork: "View the work",
    explore: "See how we help",
  },
  id: {
    nav: ["Audit", "Layanan", "Proyek", "Tentang"],
    cta: "Mulai dengan Audit",
    language: "English",
    heroLabel: "Flective / Partner Pertumbuhan Digital",
    heroTitle: <>Ubah wawasan pelanggan<br />menjadi pertumbuhan yang <em>terukur.</em></>,
    heroText: "Kami menggabungkan strategi pertumbuhan, wawasan pelanggan, dan eksekusi digital yang menghasilkan — supaya langkah berikutnya yang kamu ambil adalah yang paling berdampak.",
    heroProof: "Untuk bisnis dan tim e-commerce yang sudah aktif, tetapi belum punya cukup kejelasan.",
    heroStats: [
      { value: "100%", label: "Rekomendasi berbasis bukti", note: "Tanpa tebak-tebakan — setiap insight ditelusuri dari data kamu" },
      { value: "1 tim", label: "Strategi + intelijen + eksekusi", note: "Dari diagnosis sampai delivery tanpa serah-terima berantakan" },
      { value: "30 hari", label: "Sampai punya rencana prioritas", note: "Daftar singkat hal yang perlu diperbaiki, siap dieksekusi" },
    ],
    heroCtaPrimary: "Jadwalkan Percakapan Growth",
    heroCtaSecondary: "Lihat masalah yang kami selesaikan",
    problemsEyebrow: "Apakah ini terasa familiar?",
    problemsTitle: "Kamu tidak selalu butuh lebih banyak marketing. Mungkin kamu perlu melihat apa yang sedang menghambat.",
    problemsLead: "Sebelum menambah campaign, redesign, atau tools baru, temukan friction yang diam-diam membuat peluang hilang.",
    problems: [
      "Website sudah mendapat kunjungan, tetapi inquiry serius masih sedikit.",
      "Budget marketing terus keluar, tetapi belum jelas mana yang benar-benar menghasilkan.",
      "Ide di tim banyak, tetapi prioritas 30 hari ke depan belum disepakati.",
      "Data tersebar di banyak tempat, sehingga keputusan masih banyak berdasarkan feeling.",
    ],
    offerEyebrow: "Mulai di sini / Offer dengan scope jelas",
    offerTitle: "Growth Audit",
    offerLead: "Review terarah atas website, toko online, customer journey, dan sinyal performa yang tersedia—supaya kamu tahu apa yang perlu diperbaiki lebih dulu.",
    offerCard: "Temukan lima perubahan yang paling mungkin memperbaiki 30 hari ke depan.",
    outcomes: [
      "Gambaran lebih jelas tentang titik kebocoran growth",
      "Daftar singkat hal yang perlu diperbaiki lebih dulu",
      "Rencana praktis yang bisa dijalankan tim",
    ],
    offerLink: "Lihat isi audit",
    methodEyebrow: "Cara kerja kami",
    methodTitle: "Pahami masalahnya sebelum membangun jawabannya.",
    method: [
      ["01", "Diagnosis", "Temukan masalah di balik gejalanya."],
      ["02", "Prioritas", "Pilih langkah dengan dampak komersial paling jelas."],
      ["03", "Build", "Wujudkan perbaikannya di tools yang bisnis gunakan."],
      ["04", "Ukur", "Lihat apa yang berubah dan apa langkah berikutnya."],
    ],
    capabilitiesEyebrow: "Yang bisa kami bantu",
    capabilitiesTitle: "Satu partner untuk bottleneck growth-mu.",
    workEyebrow: "Bukti, bukan janji",
    workTitle: "Pekerjaan yang berguna menghasilkan bukti.",
    workLead: "Kami sedang membangun portfolio dari masalah bisnis nyata. Setiap case study akan menjelaskan konteks, keputusan, eksekusi, dan dampak yang benar-benar terukur.",
    philosophyEyebrow: "Prinsip di balik pekerjaan ini",
    philosophy: <>Reflect.<br />Reframe.<br />Grow.</>,
    philosophyText: "Growth yang sehat dimulai dari melihat situasi dengan cukup jelas agar keputusan berikutnya benar-benar berarti.",
    processEyebrow: "Engagement pertama",
    processTitle: "Proses yang jelas, tanpa gaya-gayaan agency.",
    process: [
      ["01", "Ceritakan konteksnya", "Ceritakan apa yang kamu jual, dari mana customer datang, dan bagian mana yang terasa macet."],
      ["02", "Kami cari friction-nya", "Kami melihat journey, sinyal performa, dan konteks pasar di balik masalahnya."],
      ["03", "Kamu mendapat langkah berikutnya", "Terima rencana prioritas yang ringkas—dengan bantuan implementasi bila memang dibutuhkan."],
    ],
    faqEyebrow: "Pertanyaan, dijawab",
    faqTitle: "Yang mungkin sedang kamu tanyakan.",
    faqLead: "Tidak menemukan jawabanmu? Tanya langsung.",
    faqs: [
      { q: "Apa itu Growth Audit?", a: "Review dengan scope jelas atas website, toko online, customer journey, dan sinyal performa yang terlihat. Kamu mendapat rencana prioritas 30 hari — bukan laporan generik." },
      { q: "Berapa lama prosesnya?", a: "Audit selesai dalam 30 hari sejak kickoff. Sebagian besar pekerjaan di sisi kami; kamu cukup berbagi konteks dan akses sekali." },
      { q: "Kami butuh eksekusi, bukan cuma laporan — bisa?", a: "Bisa. Audit adalah titik awal, tapi kami juga membangun: website, journey, dashboard, dan automasi. Kamu tentukan scope-nya setelah melihat rencananya." },
      { q: "Berapa investasinya?", a: "Scope tetap, harga tetap. Kami sampaikan investasinya sebelum kamu memutuskan — tanpa kejutan, tanpa billing per jam." },
      { q: "Apakah data kami aman?", a: "Kami bekerja dengan perjanjian kerahasiaan yang jelas. Data tetap milikmu; kami hanya menggunakannya untuk menyusun rencana." },
      { q: "Kenapa Flective, bukan agency yang lebih besar?", a: "Kami menjaga tim tetap senior dan scope tetap kecil, jadi masalahmu mendapat perhatian langsung — bukan tim junior dan rantai account manager yang panjang." },
    ],
    finalEyebrow: "Ambil langkah pertama",
    finalTitle: "Tahu apa yang perlu diperbaiki sebelum menambah biaya.",
    finalText: "Ceritakan konteksnya. Kami bantu menilai apakah audit adalah langkah yang tepat.",
    seeProblems: "Lihat masalah yang kami bantu",
    seeOffer: "Lihat offer-nya",
    seeWork: "Lihat pekerjaan",
    explore: "Lihat cara kami membantu",
  },
} as const;

export function isLocale(value: string): value is Locale { return value === "id" || value === "en"; }
export function localizedPath(locale: Locale, path: string) { return `/${locale}${path}`; }

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <><section className="hero commercial-hero"><div className="signal-field" /><div className="hero-inner"><div className="hero-label"><span>{t.heroLabel}</span><span>Indonesia / Remote</span></div><h1>{t.heroTitle}</h1><div className="hero-bottom"><div><p>{t.heroText}</p><p className="hero-proof">{t.heroProof}</p></div><div className="hero-actions"><Link className="button button-accent" href={localizedPath(locale, "/audit")}>{t.heroCtaPrimary} <span>→</span></Link><a className="text-link" href="#problems">{t.heroCtaSecondary} <span>↓</span></a></div></div><div className="hero-stats">{t.heroStats.map((s) => <div className="hero-stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span><small>{s.note}</small></div>)}</div></div></section><section id="problems" className="section"><div className="shell section-intro"><p className="eyebrow">{t.problemsEyebrow}</p><div><h2 className="section-heading">{t.problemsTitle}</h2><p className="section-lede">{t.problemsLead}</p></div></div><div className="shell friction-list">{t.problems.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div></section><section className="section offer-section"><div className="shell offer-layout"><div><p className="eyebrow">{t.offerEyebrow}</p><h2 className="section-heading">{t.offerTitle}</h2><p className="section-lede">{t.offerLead}</p><Link className="text-link" href={localizedPath(locale, "/audit")}>{t.offerLink} <span>→</span></Link></div><div className="offer-card"><div className="offer-card-top"><span>FLECTIVE / AUDIT</span><span>01</span></div><h3>{t.offerCard}</h3><ul>{t.outcomes.map((x) => <li key={x}><span>+</span>{x}</li>)}</ul><Link className="button" href={localizedPath(locale, "/audit")}>{t.cta} <span>→</span></Link></div></div></section><section className="section system-section"><div className="shell"><p className="eyebrow">{t.methodEyebrow}</p><h2 className="section-heading">{t.methodTitle}</h2><div className="loop">{t.method.map(([n, title, text]) => <div className="loop-step" key={title}><span>{n}</span><strong>{title}</strong><p>{text}</p></div>)}</div></div></section><section className="section"><div className="shell"><p className="eyebrow">{t.capabilitiesEyebrow}</p><h2 className="section-heading">{t.capabilitiesTitle}</h2><div className="capability-grid">{services.map((service, index) => <article className="capability" key={service.slug}><span className="number">0{index + 1} / {service.eyebrow.split("—")[1]?.trim()}</span><h3>{service.name}</h3><p>{service.statement}</p><ArrowLink href={`/${locale}/services/${service.slug}`}>{t.explore}</ArrowLink></article>)}</div></div></section><section className="section section-line"><div className="shell"><p className="eyebrow">{t.workEyebrow}</p><h2 className="section-heading">{t.workTitle}</h2><p className="section-lede section-lede-narrow">{t.workLead}</p><div className="work-grid">{caseStudies.map((study) => <Link href={`/${locale}/work/${study.slug}`} className={`work-card ${study.palette}`} key={study.slug}><div className="work-card-meta"><span>{study.client}</span><span>{study.year}</span></div><h3>{study.project}</h3><p>{study.summary}</p><span className="arrow-link">{t.seeWork} <span>↗</span></span></Link>)}</div><div className="section-bridge"><p>Want to be the next useful case?</p><Link className="text-link" href={localizedPath(locale, "/contact")}>{locale === "id" ? "Ceritakan apa yang macet" : "Tell us what is stuck"} <span>→</span></Link></div></div></section><section className="section philosophy"><div className="shell"><p className="eyebrow">{t.philosophyEyebrow}</p><h2>{t.philosophy}</h2><p>{t.philosophyText}</p></div></section><section className="section"><div className="shell"><p className="eyebrow">{t.processEyebrow}</p><h2 className="section-heading">{t.processTitle}</h2><div className="process-list">{t.process.map(([number, title, text]) => <article className="process-item" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="section faq-section"><div className="shell"><div className="faq-head"><p className="eyebrow">{t.faqEyebrow}</p><div><h2 className="section-heading">{t.faqTitle}</h2><p className="section-lede">{t.faqLead}</p></div></div><div className="faq-list">{t.faqs.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div></div></section><section className="section cta-section"><div className="shell"><p className="eyebrow">{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalText}</p><Link className="button button-light" href={localizedPath(locale, "/audit")}>{t.heroCtaPrimary} <span>→</span></Link></div></section></>;
}

export function LocalizedAudit({ locale }: { locale: Locale }) { const id = locale === "id"; return <section className="page-hero audit-hero"><div className="shell"><p className="eyebrow">Flective / {id ? "Offer dengan scope jelas" : "Fixed-scope offer"}</p><h1>{id ? "Temukan kebocorannya sebelum menambah traffic." : "Find the leak before you pour in more traffic."}</h1><p>{id ? "Audit terarah untuk bisnis dan e-commerce yang sudah punya aktivitas digital, tetapi belum tahu bagian mana yang paling menghambat inquiry atau penjualan." : "A focused review for businesses and e-commerce teams that have digital activity, but need a clearer path from attention to action."}</p><div className="audit-buyline"><strong>{id ? "Scope jelas" : "Fixed scope"}</strong><span>{id ? "Website, toko, journey, dan sinyal" : "Website, store, journey, and signals"}</span><span>{id ? "Rencana prioritas 30 hari" : "30-day priority plan"}</span></div><div className="hero-actions page-actions"><Link className="button" href={localizedPath(locale, "/contact")}>{id ? "Tanya tentang audit" : "Ask about the audit"} <span>→</span></Link></div></div></section>; }

export function LocalizedContact({ locale }: { locale: Locale }) { const id = locale === "id"; return <section className="section"><div className="shell contact-layout"><div className="contact-copy"><p className="eyebrow">{id ? "Mulai dari masalahnya" : "Start with the problem"}</p><h1>{id ? "Bagian mana yang sedang menahan growth?" : "What is holding growth back?"}</h1><p>{id ? "Ceritakan sedikit konteksnya. Kami akan membantu menilai langkah pertama yang paling masuk akal—bukan langsung menawarkan project besar." : "Share a little context. We will help you decide the most useful first step—not push you into a large project."}</p><div className="contact-direct"><span className="eyebrow">{id ? "Untuk sekarang" : "For now"}</span><a href="mailto:akbar.alfa123@gmail.com">akbar.alfa123@gmail.com</a><small>{id ? "Kamu bisa mengirim konteks langsung lewat email." : "You can send the context directly by email."}</small></div></div><form className="contact-form" action="mailto:akbar.alfa123@gmail.com" method="post" encType="text/plain"><div className="form-intro"><strong>{id ? "Tanya tentang Growth Audit" : "Ask about a Growth Audit"}</strong><span>2–3 minutes</span></div><div className="field"><label htmlFor="name">{id ? "Nama" : "Name"}</label><input id="name" name="name" required /></div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div><div className="field"><label htmlFor="company">{id ? "Nama bisnis / toko" : "Company or store"}</label><input id="company" name="company" required /></div><div className="field"><label htmlFor="challenge">{id ? "Apa yang ingin kamu perbaiki?" : "What are you trying to improve?"}</label><textarea id="challenge" name="challenge" required placeholder={id ? "Contoh: traffic ada, tetapi inquiry dan penjualan belum mengikuti." : "For example: we get traffic, but enquiries or sales are not following."} /></div><button className="button" type="submit">{id ? "Kirim konteks" : "Send context"} <span>→</span></button><p className="form-note">{id ? "Form ini mengirim email lewat aplikasi mail bawaan perangkatmu." : "This form sends an email via your device mail app."}</p></form></div></section>; }

export { copy };
