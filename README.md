# GamePK — gamepk.net.pk

Pakistan's gaming platform built with Next.js. SEO-optimized site for GamePK download, JazzCash/Easypaisa guides, and JILI game blogs.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # App Router pages + sitemap/robots/manifest/OG
│   ├── about/
│   ├── blogs/[slug]/
│   ├── contact/
│   ├── deposit/
│   ├── download/
│   ├── pc/
│   ├── privacy/
│   ├── terms/
│   ├── withdraw/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
├── components/
│   ├── content/            # Content renderer, breadcrumbs
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage & listing sections
│   ├── seo/                # JSON-LD + FAQ UI
│   └── ui/                 # Reusable UI components
├── content/                # Blog post data
├── lib/                    # SEO, metadata, FAQs, constants
└── types/
```

## SEO Features

- Unique meta titles, descriptions, keywords per page
- Canonical URLs + `en-PK` / `x-default` hreflang
- Open Graph & Twitter Card tags + dynamic OG image
- JSON-LD: Organization, WebSite, WebPage, Article, FAQ, HowTo, SoftwareApplication, BreadcrumbList, ContactPage
- Auto `sitemap.xml` and `robots.txt`
- Semantic HTML, H1 hierarchy, breadcrumbs, internal links
- Blog search aligned with WebSite SearchAction
- Image alts, `next/image`, compression, security headers
- 404 set to `noindex`

## Deploy

Deploy to Vercel or any Node host. Point DNS to **gamepk.net.pk** and keep `SITE_URL` in `src/lib/constants.ts` in sync.

Submit `https://gamepk.net.pk/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) after go-live.

```bash
npm run build
npm start
```

## License

Private — All rights reserved © GamePK
