# Yohan Ishara Portfolio

Professional React + TypeScript + Tailwind CSS portfolio website for Yohan Ishara.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Email Setup

The contact form posts to `/api/contact` and sends email with Resend. The API key must stay server-side.

Local setup:

1. Create a Resend account.
2. Create a Resend API key.
3. Create `.env.local` in the project root.
4. Add:

```bash
RESEND_API_KEY=your_real_resend_api_key
```

5. Run:

```bash
npm run dev
```

6. Test the contact form.

Vercel setup:

1. Go to Vercel Project Settings.
2. Open Environment Variables.
3. Add:

```text
RESEND_API_KEY=your_real_resend_api_key
```

4. Redeploy the project.

Emails are sent to:

```text
yohanishara01@gmail.com
```

Production note: for production, verify a custom domain in Resend and replace `onboarding@resend.dev` with a verified sender email such as `contact@yourdomain.com`.

Note: this portfolio is a Vite React app, so the active deployed endpoint is `api/contact.ts`. A matching Next.js route is also included at `app/api/contact/route.ts` for compatibility if the project is migrated to Next.js later.

## Edit Portfolio Content

Most editable portfolio content lives in:

```text
src/data/portfolio.ts
```

Update these fields before publishing:

- `profile.upwork`
- `profile.linkedIn`
- `profile.github`
- `profile.cv`
- Upwork review cards
- project details or service descriptions

Current downloadable CV file:

```text
public/yohan-ishara-cv.pdf
```

## Deploy on Vercel

Use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
