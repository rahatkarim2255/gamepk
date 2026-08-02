# GamePK — gamepk.net.pk

Pakistan's premier gaming platform built with Next.js. SEO-optimized website targeting the **gamepk** keyword with game guides, esports news, hardware guides, and community content for Pakistani gamers.

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
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── games/[slug]/
│   ├── guides/[slug]/
│   ├── news/[slug]/
│   ├── privacy/
│   ├── terms/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
├── components/
│   ├── content/            # Content renderer, breadcrumbs
│   ├── layout/             # Header, Footer
│   ├── sections/           # Homepage & listing sections
│   ├── seo/                # JSON-LD structured data
│   └── ui/                 # Reusable UI components
├── content/                # Game, guide, and news data
├── lib/                    # SEO, metadata, constants
└── types/                  # TypeScript interfaces

public/
└── images/                 # Add your images here (see README)
```

## SEO Features

- Unique meta titles & descriptions per page
- Open Graph & Twitter Card tags
- JSON-LD structured data (Organization, WebSite, Article, FAQ, Breadcrumbs)
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML with proper heading hierarchy
- Canonical URLs for all pages
- `lang="en-PK"` locale targeting

## Adding Images

Place images in `public/images/` following the guide in `public/images/README.md`. Replace `ImagePlaceholder` components with Next.js `Image` once assets are ready.

## Deploy

Deploy to Vercel, Netlify, or any Node.js host. Set your domain to **gamepk.net.pk** and ensure `SITE_URL` in `src/lib/constants.ts` matches your production URL.

```bash
npm run build
npm start
```

## License

Private — All rights reserved © GamePK
