README.txt — Farah (فرح) | Emirati Wedding Orchestration + Multilingual Vendor Hub
================================================================================

Tagline
-------
“Your bilingual wedding planner, built for Emirati weddings.”

What Farah Is
-------------
Farah is a hackathon MVP that coordinates Emirati weddings end-to-end across:
- Two celebrations (men’s + women’s), often different days/venues
- 15–30+ vendors
- Multiple languages (Arabic + Hindi/Tagalog/English/etc.)
- High budgets + high risk (ghosting, double-booking, price inflation, confusion)

Farah combines:
1) Verified vendor discovery (trust layer)
2) Voice + text translation for coordination
3) A timeline brain that automates follow-ups + confirmations
4) Call transcripts + action items so nothing is forgotten

Core Pain Points
----------------
- WhatsApp chaos, scattered invoices, unclear confirmations
- Language barriers between family and vendor teams
- No centralized tracking: booked/paid/confirmed/status
- Vendor reliability unknown; price inflation common in weddings

MVP Features (Hackathon Scope)
------------------------------
Bride/Planner flow:
- “Plan my wedding” intake (Arabic prompt)
- Vendor search (category, budget, side: men/women, guest count)
- Vendor reliability score + verification signals
- One-click inquiry to top vendors in their language
- Auto-generated wedding timeline with tasks + follow-ups
- Vendor responses unified: text + voice translated back to Arabic
- Call summary: transcript + action items + commitments

Vendor flow (minimal):
- Receive inquiry in preferred language
- Reply by voice/text
- Confirm availability + price
- Upload invoice/terms (optional)

How The 5 Tools Map In (Integrations)
-------------------------------------
1) Crustdata (Trust + Discovery)
   - Pull vendor company signals (registration, age, size, growth indicators)
   - Compute a “Reliability Score” for ranking

2) Uplift AI (Voice Translation)
   - Bride voice note in Arabic -> vendor hears in their language
   - Vendor voice reply -> bride receives Arabic version

3) Lingo.dev (Text Translation + Localization)
   - Translate contracts, invoices, menus, mood boards text
   - App UI localization (hackathon: Arabic + English + one vendor language)

4) Trace (Timeline Brain / Orchestration)
   - Generate a planning timeline (6 months -> day-of)
   - Send automated follow-ups + confirmations
   - Escalate decisions to human (“pick 1 of these 3 photographers”)

5) Lyra (Consultation Calls)
   - Host call / transcribe / extract action items
   - Push commitments into timeline + vendor status

Architecture (Hackathon-Friendly)
---------------------------------
[Web App] (Next.js)
   |
   v
[API Server] (Node/Express)
   |-- Vendor Adapter (Crustdata or mocked)
   |-- Translation Adapter (Lingo.dev or mocked)
   |-- Voice Adapter (Uplift AI or mocked)
   |-- Orchestrator (Trace or simplified internal workflow)
   |-- Call Notes Adapter (Lyra or mocked)
   |
   v
[DB] (Postgres or SQLite for hackathon)

Suggested Tech Stack
--------------------
Frontend: Next.js + Tailwind
Backend: Node.js (Express) or Next.js API routes
DB: SQLite (fast) or Postgres
Auth: optional (single demo user)
Queue: optional (in-memory job runner for follow-ups)

Repo Structure (Suggested)
--------------------------
/farah
  /apps
    /web                # UI (intake, vendors, timeline, messages)
    /api                # API endpoints
  /packages
    /adapters           # crustdata, lingo, uplift, lyra, trace wrappers
    /core               # scoring, timeline generation, schemas
  /data
    vendors.seed.json   # fallback dataset for demo
  .env.example
  README.txt

Environment Variables (.env.example)
------------------------------------
CRUSTDATA_API_KEY=
LINGO_API_KEY=
UPLIFT_API_KEY=
TRACE_API_KEY=
LYRA_API_KEY=
DATABASE_URL=

Hackathon Mode (No Keys Needed)
-------------------------------
If API keys are missing, Farah runs in “mock mode”:
- Crustdata -> seeded vendors list + simulated signals
- Lingo.dev -> basic placeholder translation (or a lightweight translator)
- Uplift -> simulated voice-to-text + “translated” response
- Trace -> internal timeline generator + scheduled follow-ups (in-memory)
- Lyra -> simulated call summary from typed notes

Local Setup (Example)
---------------------
1) Install deps
   - npm install

2) Configure
   - cp .env.example .env

3) Run
   - npm run dev

Demo Script (2–3 minutes)
--------------------------
1) Bride speaks (Arabic): “I need a caterer for 300 guests, women’s side, traditional food, budget 50,000 AED.”
2) Farah returns verified caterers ranked by reliability (trust signals).
3) Click “Send inquiries”:
   - Farah sends vendor messages translated to vendor language (text).
4) Vendor responds with voice note (Hindi):
   - Farah shows Arabic translation + extracted price/availability.
5) Bride schedules tasting call:
   - Lyra generates call summary + action items.
6) Timeline updates automatically (Trace):
   - “Tasting scheduled”, “Invoice pending”, “Confirm 2 weeks before event”.

Success Criteria (Hackathon)
----------------------------
- End-to-end flow works in one session:
  intake -> vendor list -> inquiry -> translated response -> timeline update
- Demonstrates cultural structure (men/women sides)
- Demonstrates multilingual bridge (voice or text)
- Shows trust scoring and verification layer

Out of Scope (Hackathon)
------------------------
- Real payments
- Full vendor onboarding portal
- Legal contract signing
- Complex multi-event guest management
- Production-grade privacy controls (not ignored; just not fully built)

Privacy Notes (Important)
-------------------------
- Women’s event content is sensitive: no photo sharing by default.
- Vendor access should be least-privilege.
- Store minimal data for demo; redact audio/transcripts when possible.

Future Extensions
-----------------
- Price benchmarking + negotiation assistant
- “Backup vendor” auto-sourcing if confirmation fails
- Full event types: Ramadan gatherings, graduations, National Day events
- Family roles: bride’s mother dashboard, groom’s side dashboard
