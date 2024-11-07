# renanmav.com

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using a custom [portfolio site template with a blog](https://vercel.com/templates/next.js/portfolio-starter-kit).

Includes:

- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- Dynamic OG images
- Syntax highlighting
- Tailwind v3
- Vercel Speed Insights / Web Analytics

## Getting Started

First, install dependencies using [Bun](https://bun.sh/docs/installation) and then run the development server:

```bash
bun i && bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Different layouts

I'm using [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to organize routes and enable different layouts based on route grouping.

Checkout `app/(public)` and `app/(private)`. _(names are subject to change)_
