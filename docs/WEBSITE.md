# Flective Website

## Sitemap

- `/` — Positioning and connected narrative
- `/services` — Overview of Intelligence, Growth, and Build
- `/services/intelligence` — Decision-support and insight capability
- `/services/growth` — Growth direction and experimentation capability
- `/services/build` — Digital systems and execution capability
- `/work` — Case-study archive
- `/work/[slug]` — Reusable case-study structure
- `/about` — Why Flective exists and how it thinks
- `/contact` — Project conversation form

## Content architecture

Service content lives in `apps/web/src/content/services.ts`. Work data lives in `apps/web/src/content/work.ts`. Pages consume these typed structures rather than embedding full records in presentation components.

The current work entries are intentionally marked **Content Pending**. Replace their content only with approved client information and verified impact.

## Interaction philosophy

Motion is intentionally limited to navigation, links, hover feedback, and spatial shifts. It should expose hierarchy and movement, never compete with content. The CSS respects `prefers-reduced-motion`.

## Design decisions

- Restrained dark ink, warm paper, acid accent, oxide, and blue palette.
- Editorial display typography, compact labels, visible grid structure, and strong borders.
- No stock imagery or fake dashboards.
- Abstract signal grid in the hero visualizes noise becoming legible structure.
- Mobile retains hierarchy with dedicated navigation and reflowed editorial layouts.
