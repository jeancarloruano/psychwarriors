# Psychological Warfare (psychwarriors.com)

Guidance and supportive consultation services. A Next.js marketing site that directs visitors to book 15-minute consultations or 45-minute sessions via **Calendly** (no backend or database).

## Tech

- **Next.js 16** (App Router)
- **React 18**, **TypeScript**, **Tailwind CSS**
- **Calendly** – session type selection on `/booking`, then popup widget for scheduling

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment (optional)**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to set your Calendly URLs. If unset, the booking page uses built-in fallback URLs.

   - `NEXT_PUBLIC_CALENDLY_SCHEDULING_URL` – fallback if the per-type URLs are not set  
   - `NEXT_PUBLIC_CALENDLY_CONSULTATION_URL` – 15-minute consultation event type  
   - `NEXT_PUBLIC_CALENDLY_SESSION_URL` – 45-minute session event type  

3. **Run**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Pages

| Route      | Description                                      |
|-----------|---------------------------------------------------|
| `/`       | Home – hero, consultation topics (relationships, career, college, behavior) |
| `/learn`  | Learn More – approach, name, about, style, belief, change |
| `/book`   | Book A Session – rates, policies, legal disclaimer, CTA to booking |
| `/booking`| Choose 15-min or 45-min, then open Calendly in a popup |
| `/contact`| Contact – hours, email, phone, CTA to book        |

Scheduling and payments are handled entirely in Calendly; there is no Stripe, database, or admin area in this repo.
