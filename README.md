# Psychological Warfare (psychwarriors.com)

Professional counseling and therapy booking website with Stripe payments.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database URL, Stripe keys, Resend key, and other values.

3. **Database**
   ```bash
   npm run db:push
   npm run db:seed
   ```
   Creates tables and an admin user (from `ADMIN_EMAIL` / `ADMIN_PASSWORD`).

4. **Stripe**
   - Create products/prices or use dynamic pricing (configured via env: `CONSULTATION_RATE`, `APPOINTMENT_RATE` in cents).
   - Set up webhook: `https://yourdomain.com/api/webhooks/stripe` for `checkout.session.completed`.

5. **Run**
   ```bash
   npm run dev
   ```

## Pages

- `/` – Home
- `/about` – About Me
- `/book` – Book A Session (rates, policies)
- `/booking` – Client booking (slot picker, Stripe checkout)
- `/contact` – Contact info
- `/admin` – Admin dashboard (login required)

## Features

- 15-min consultation and 45-min appointment booking
- Availability: Mon 5–7PM, Tue 7–8PM, Fri 11AM–6PM PST
- Stripe payments
- Consultation fee credited toward appointment
- Cancellation fee within 24 hours
- Client cancel/reschedule via magic link in confirmation email
- Admin: calendar view, block times, transaction history
