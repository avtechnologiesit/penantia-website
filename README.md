# Penantia — Next.js Website

Complete Next.js 14 codebase for penantia.com. White & grey design system, fully SEO-optimised.

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project** → Import this GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Add domain `penantia.com` in project settings

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Pages included
- `/` — Homepage (all sections)
- `/blog` — Blog listing (10 posts)
- `/sitemap.xml` — Auto-generated sitemap
- `/robots.txt` — SEO robots file

## SEO built in
- Unique title + meta description per page
- Open Graph + Twitter Card tags
- Organization + Product schema markup (JSON-LD)
- Auto-generated sitemap with all 35+ blog URLs
- robots.txt

## Before going live
- [ ] Add `public/favicon.ico`
- [ ] Add `public/og-image.jpg` (1200x630px)
- [ ] Submit sitemap in Google Search Console
