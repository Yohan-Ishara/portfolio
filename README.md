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

The contact form posts to `/api/contact` and sends email with Resend.

Create a Resend API key, then add this environment variable locally and in Vercel:

```text
RESEND_API_KEY=your_resend_api_key
```

For local testing, create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
```

On Vercel:

- Open Project Settings
- Go to Environment Variables
- Add `RESEND_API_KEY`
- Redeploy the project

Emails are sent to:

```text
yohanishara01@gmail.com
```

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
