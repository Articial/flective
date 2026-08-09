# Flective

Flective is a digital growth and intelligence partner. We help businesses **understand → decide → build → grow**.

## Workspace

```text
apps/web/              Official Flective website (Next.js)
automation/scripts/    Node.js lead-enrichment script
automation/n8n/        n8n workflow exports
automation/data/       Non-private sample data and ignored runtime data
docs/                  Brand, website, and architecture context
```

## Run the website

```bash
cd apps/web
npm install
npm run dev
```

Then open the local URL printed by Next.js. Production checks:

```bash
npm run lint
npm run build
```

## Automation

The automation is deliberately separate from the public website. For the enrichment script:

1. Create `automation/.env` from `automation/.env.example` and set local credentials.
2. Place private input data in `automation/data/leads.csv` (ignored by Git).
3. Install the script dependencies in an appropriate automation Node environment.
4. Run `node automation/scripts/enrichment.js` from the repository root.

The n8n workflow export is located at `automation/n8n/wa-outreach-enrichment-followup.json`; it remains inactive on import. Review webhook authentication, WAHA access control, input validation, and send-failure handling before production use.

## Documentation

- `docs/BRAND.md` — Positioning and writing principles
- `docs/WEBSITE.md` — Sitemap and design approach
- `docs/ARCHITECTURE.md` — Separation between web and automation

## Security

Never commit `.env` files, live credentials, or private lead data. The exposed OpenAI credential found in the prior repository state must be rotated manually.
