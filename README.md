# Pherrix Website

Next.js, TypeScript, and Tailwind CSS rebuild of the Pherrix static website.
The original static HTML source is preserved in `legacy-static/`.

## Run locally

```bash
npm install
npm run dev
```

## Contact email

The contact form posts to `src/app/api/contact/route.ts`.

Configure `.env.local`:

```bash
EMAIL_PROVIDER=smtp
CONTACT_TO_EMAIL=vivek@pherrixtx.com
CONTACT_FROM_EMAIL="Pherrix Website <no-reply@pherrixtx.com>"
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-user
SMTP_PASSWORD=your-password
```

For local testing, leave `EMAIL_PROVIDER=console`.
