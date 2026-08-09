# Architecture

## Workspace structure

```text
apps/web/              Next.js App Router marketing website
automation/scripts/    Local Node.js enrichment scripts
automation/n8n/        n8n workflow exports
automation/data/       Sample data plus ignored private runtime data
docs/                  Brand, website, and architecture reference
```

## Website

`apps/web` is an independent Next.js 16 + TypeScript + Tailwind CSS application. It uses App Router and static content modules in `src/content`. Shared chrome sits in `src/components`; pages live under `src/app`.

The public contact interface is not connected to automation. Any future submission endpoint must validate input, apply rate limits, use server-side credentials, and be reviewed before it calls the n8n workflow.

## Automation

`automation/scripts/enrichment.js` remains a CommonJS Node script. It expects runtime data in `automation/data/leads.csv` and writes `automation/data/leads_enriched.csv`. Its original working-directory assumptions have been updated after the move.

`automation/n8n/wa-outreach-enrichment-followup.json` is an inactive n8n export. It requires its external n8n credentials, Google Sheets, and WAHA configuration. It is intentionally separated from website code and must not receive public web form traffic without authentication, validation, rate limiting, and webhook verification.

## Secrets and data

Real secrets belong only in ignored `.env` files. The repository ignores runtime lead data and generated enrichment exports. Commit only representative, non-private samples such as `automation/data/leads.sample.csv`.
