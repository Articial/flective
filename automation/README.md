# Automation

This directory contains the pre-existing Flective lead-enrichment and WhatsApp outreach automation, separated from the public website.

## Layout

- `scripts/enrichment.js` — Reads `data/leads.csv`, generates enrichment content with OpenAI, and writes `data/leads_enriched.csv`.
- `n8n/wa-outreach-enrichment-followup.json` — Inactive n8n export for lead intake, outreach, replies, and follow-up.
- `data/leads.sample.csv` — Non-private input format example.

## Local configuration

Copy `.env.example` to `.env` locally, then supply real values outside version control. Private input and generated files are ignored by Git.

## Important production controls

Do not connect a public web form to these workflows yet. Before activation, protect webhooks with authentication/signature verification and rate limiting; validate inputs; protect WAHA access; make failed sends distinguishable from successful sends; and establish consent, retention, and access controls for contact data.
