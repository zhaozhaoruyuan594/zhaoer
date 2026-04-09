# Zhaoer · Personal Website

A modern, bilingual (中文 / English) personal site built with **Next.js 16**, **Tailwind CSS v4**, **Three.js** (via `@react-three/fiber`), and **Framer Motion**.

## What's inside

- 🏠 **Home** — animated 3D hero you can drag, with name + tagline
- 👤 **About** — bio, skills, interests
- 💼 **Career** — vertical timeline of work history
- 📚 **Journey** — learning log as a card grid
- 📷 **Gallery** — auto-generated from `public/photos/`
- ✉️ **Contact** — email + social links
- 🌐 **i18n** — `/zh` and `/en`, switchable from the navbar

## Run locally

```bash
# load Node (only first time per shell session)
export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"

# start dev server
npm run dev
```

Open <http://localhost:3000> — you'll be auto-redirected to `/zh` or `/en`.

## Edit your content

All text lives in two JSON files (no code knowledge required):

```
src/app/dictionaries/zh.json   ← 中文文案
src/app/dictionaries/en.json   ← English copy
```

Open them in any text editor, replace the placeholder strings, save → the page refreshes.

## Add photos

Drop image files (`.jpg`, `.png`, `.webp`, etc.) into:

```
public/photos/
```

They show up in the Gallery page automatically. No config needed.

## Customize the look

- **Colors / theme** — `src/app/globals.css` (CSS variables at the top)
- **3D hero** — `src/components/ThreeHero.tsx` (color, distortion, geometry)
- **Navbar links** — `src/components/Navbar.tsx`
- **Pages** — `src/app/[lang]/<section>/page.tsx`

## Deploy to Vercel (free)

1. Sign up at <https://vercel.com> (use email or GitHub login)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. From this folder:
   ```bash
   vercel
   ```
   Follow the prompts (login → "set up and deploy" → all defaults).
4. Done. You get a free `https://<project>.vercel.app` URL to share.

To redeploy after changes: `vercel --prod`

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS v4 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Animation | Framer Motion |
| i18n | Built-in dictionary pattern |
| Hosting | Vercel (recommended) |
