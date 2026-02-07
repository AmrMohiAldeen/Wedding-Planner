<div align="center">

# فرح — Farah

**AI-Powered Emirati Wedding Planner**

*VIBE26 UAE Hackathon Submission*

</div>

---

Farah is a hackathon MVP for planning Emirati weddings: vendor discovery + verification, multilingual coordination, and an automated planning timeline.

Emirati weddings are complex (separate men's and women's events, many vendors, strict scheduling, and privacy constraints). Today this is managed through scattered WhatsApp messages and manual follow-ups. Farah centralizes the workflow and reduces miscommunication across languages.

## What it does (MVP)

- **Wedding intake**: side (men/women), guest count, budget, category (e.g., catering)
- **Verified vendor discovery**: vendors ranked by reliability signals (trust layer)
- **Multilingual messaging**: send inquiries and view responses in the user's language
- **Voice + text support**: vendor voice notes and text are translated back to the planner
- **Timeline brain**: auto-generates a planning timeline and follow-ups (booked/paid/confirmed)

## Demo flow

1. User submits requirements (Arabic supported).
2. Farah returns a ranked list of verified vendors with reliability indicators.
3. User sends inquiries to top vendors; each vendor receives the message in their language.
4. Vendors reply (text/voice); Farah translates and extracts key details (price, availability).
5. Farah updates the timeline and schedules confirmations/follow-ups automatically.

## Architecture

```mermaid
flowchart TB
    subgraph USER["👰🏻‍♀️ BRIDE / FAMILY"]
        U1["Arabic voice or text input"]
    end

    subgraph FRONTEND["🖥️ NEXT.JS FRONTEND"]
        F1["Wedding Dashboard"]
        F2["Chat Interface"]
        F3["Vendor Directory"]
        F4["Timeline Tracker"]
        F5["Voice Input/Output"]
    end

    subgraph AGENT["🤖 FARAH AI AGENT"]
        A1["Intent Detection"]
        A2["Vendor Matching"]
        A3["Task Scheduling"]
        A4["Response Generation"]
    end

    subgraph PARTNERS["⚡ TECH PARTNER INTEGRATIONS"]
        direction TB
        subgraph CR["🔍 CRUSTDATA"]
            CR1["Company Search API"]
            CR2["Company Enrichment API"]
        end
        subgraph LI["🌐 LINGO.DEV"]
            LI1["SDK localizeObject()"]
            LI2["Real-time message translation"]
        end
        subgraph UP["🎙️ UPLIFT AI"]
            UP1["Arabic/Urdu TTS Stream"]
            UP2["Orator Voice Models"]
        end
        subgraph TR["⚡ TRACE"]
            TR1["AI ↔ Human Task Routing"]
            TR2["Timeline Automation"]
        end
        subgraph LY["📞 LYRA"]
            LY1["Live Transcription"]
            LY2["Action Item Extraction"]
        end
    end

    subgraph DATA["🗄️ DATABASE"]
        D1["Wedding Profiles"]
        D2["Vendor Registry"]
        D3["Task Timeline"]
        D4["Chat History"]
        D5["Translation Cache"]
    end

    USER -->|"speaks/types"| FRONTEND
    FRONTEND -->|"API routes"| AGENT
    AGENT -->|"vendor discovery & verification"| CR
    AGENT -->|"translate all messages"| LI
    AGENT -->|"voice I/O in local languages"| UP
    AGENT -->|"orchestrate tasks & timeline"| TR
    AGENT -->|"schedule & transcribe calls"| LY
    AGENT -->|"persist all data"| DATA
    PARTNERS -->|"results"| AGENT
    AGENT -->|"unified response"| FRONTEND
    FRONTEND -->|"display/speak"| USER

    style USER fill:#D4A754,stroke:#A07D3A,color:#0A0A0F
    style FRONTEND fill:#1A1A25,stroke:#2A2A3A,color:#E8E8F0
    style AGENT fill:#2A1A0A,stroke:#D4A754,color:#D4A754
    style CR fill:#0A1A2A,stroke:#5B8DEF,color:#5B8DEF
    style LI fill:#0A2A1A,stroke:#4CAF82,color:#4CAF82
    style UP fill:#2A1A0A,stroke:#E8945A,color:#E8945A
    style TR fill:#1A0A2A,stroke:#8B6CC1,color:#8B6CC1
    style LY fill:#2A0A1A,stroke:#D46B8C,color:#D46B8C
    style DATA fill:#1A1A25,stroke:#2A2A3A,color:#E8E8F0
    style PARTNERS fill:#12121A,stroke:#2A2A3A,color:#8888A0
```

## Data flow

```mermaid
sequenceDiagram
    participant B as 👰🏻‍♀️ Bride (Arabic)
    participant F as 🤖 Farah Agent
    participant UP as 🎙️ Uplift AI
    participant CR as 🔍 Crustdata
    participant LI as 🌐 Lingo.dev
    participant TR as ⚡ Trace
    participant LY as 📞 Lyra
    participant V as 👨‍🍳 Vendor (Hindi)

    B->>F: 🗣️ "أبي طباخ لعرسي، 300 شخص، أكل إماراتي"
    F->>UP: Convert Arabic speech → text
    UP-->>F: "I want a caterer for my wedding, 300 guests, Emirati food"
    F->>CR: Search catering companies in Dubai
    CR-->>F: Returns verified caterers with trust scores
    F->>LI: Translate inquiry to Hindi
    LI-->>F: Localized message ready
    F->>V: 📩 Sends inquiry in vendor's language
    V-->>F: 📩 Responds in Hindi with menu & pricing
    F->>LI: Translate response to Arabic
    F->>UP: Speak response to bride in Arabic
    UP-->>B: 🔊 "لقيت ٣ طباخين، الأفضل هو..."
    F->>TR: Create tasks: schedule tastings, follow-ups
    B->>F: "Book a tasting call with the top one"
    F->>LY: Schedule and host call
    LY-->>F: Transcript + action items extracted
    F->>TR: Update timeline: caterer confirmed
    F->>UP: Summarize to bride in Arabic
    UP-->>B: 🔊 "الطباخ أكد، ٣٠٠ شخص، مجبوس لحم، ٥٠ ألف درهم"
```

## Tech partner usage

| Partner | Role | Integration |
|---------|------|-------------|
| **Crustdata** | Vendor intelligence | Company Search & Enrichment APIs — verify legitimacy, size, age, growth signals |
| **Lingo.dev** | Translation layer | SDK for real-time message translation (AR ↔ EN ↔ HI ↔ UR ↔ TL) + UI localization |
| **Uplift AI** | Voice interface | Orator TTS/STT — bride speaks Arabic, vendors speak their language |
| **Trace** | Workflow orchestration | Routes tasks between AI and humans, manages wedding timeline |
| **Lyra** | Meeting intelligence | Vendor consultation calls with transcription and action item extraction |

## Tech stack

- **Frontend**: Next.js + React
- **Backend**: Next.js API routes
- **Database**: SQLite (dev) / Postgres (prod)
- **Integrations**: Crustdata, Lingo.dev, Uplift AI, Trace, Lyra (mocked where API access is pending)

## Repo structure

```
farah/
├── README.md
├── package.json
├── next.config.js
├── .env.example
│
├── public/
│   └── assets/                 # logos, icons, demo images
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # root layout + fonts
│   │   ├── page.tsx            # landing / wedding intake form
│   │   ├── dashboard/
│   │   │   └── page.tsx        # main wedding dashboard
│   │   ├── vendors/
│   │   │   └── page.tsx        # vendor discovery + cards
│   │   ├── chat/
│   │   │   └── page.tsx        # multilingual chat interface
│   │   └── timeline/
│   │       └── page.tsx        # planning timeline view
│   │
│   ├── components/
│   │   ├── IntakeForm.tsx      # wedding requirements form
│   │   ├── VendorCard.tsx      # vendor with trust score badge
│   │   ├── ChatBubble.tsx      # message bubble with language tag
│   │   ├── VoiceInput.tsx      # record + send voice notes
│   │   ├── TimelineItem.tsx    # task with status (booked/paid/confirmed)
│   │   └── LanguageSwitcher.tsx
│   │
│   ├── lib/
│   │   ├── crustdata.ts        # Crustdata API client
│   │   ├── lingo.ts            # Lingo.dev SDK wrapper
│   │   ├── uplift.ts           # Uplift AI voice client
│   │   ├── trace.ts            # Trace workflow client
│   │   ├── lyra.ts             # Lyra meeting client
│   │   ├── agent.ts            # Farah agent — intent routing + orchestration
│   │   └── db.ts               # database client
│   │
│   ├── api/
│   │   ├── vendors/
│   │   │   └── route.ts        # GET: search vendors, POST: send inquiry
│   │   ├── chat/
│   │   │   └── route.ts        # POST: send/receive translated messages
│   │   ├── voice/
│   │   │   └── route.ts        # POST: voice note → text → translate
│   │   ├── timeline/
│   │   │   └── route.ts        # GET: tasks, POST: create, PATCH: update status
│   │   └── meetings/
│   │       └── route.ts        # POST: book call, GET: transcript
│   │
│   └── types/
│       └── index.ts            # shared TypeScript types
│
├── prisma/
│   └── schema.prisma           # DB schema (weddings, vendors, tasks, messages)
│
└── mocks/
    ├── vendors.json            # sample vendor data for demo
    └── responses.json          # sample translated responses
```

## Team

| Name | Role | Email |
|------|------|-------|
| | | |
| | | |
| | | |

---

<div align="center">

**Built at VIBE26 UAE Hackathon 🇦🇪**

</div>
