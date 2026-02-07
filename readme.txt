# Farah (فرح)

Farah is a hackathon MVP for planning Emirati weddings: vendor discovery + verification, multilingual coordination, and an automated planning timeline.

Emirati weddings are complex (separate men’s and women’s events, many vendors, strict scheduling, and privacy constraints). Today this is managed through scattered WhatsApp messages and manual follow-ups. Farah centralizes the workflow and reduces miscommunication across languages.

## What it does (MVP)
- **Wedding intake**: side (men/women), guest count, budget, category (e.g., catering)
- **Verified vendor discovery**: vendors ranked by reliability signals (trust layer)
- **Multilingual messaging**: send inquiries and view responses in the user’s language
- **Voice + text support**: vendor voice notes and text are translated back to the planner
- **Timeline brain**: auto-generates a planning timeline and follow-ups (booked/paid/confirmed)

## Demo flow
1. User submits requirements (Arabic supported).
2. Farah returns a ranked list of verified vendors with reliability indicators.
3. User sends inquiries to top vendors; each vendor receives the message in their language.
4. Vendors reply (text/voice); Farah translates and extracts key details (price, availability).
5. Farah updates the timeline and schedules confirmations/follow-ups automatically.

## Tech (hackathon-friendly)
- Frontend: Next.js
- Backend: Node/Next API routes
- DB: SQLite/Postgres
- Integrations (or mocks): Crustdata (verification), Lingo.dev (text translation), Uplift AI (voice translation), Trace (orchestration), Lyra (call notes)

## Repo structure (suggested)
