# Ratul Biswas — Digital Marketing Portfolio

## Original Problem Statement
Build a fully responsive, modern, premium-quality portfolio website for a Digital Marketing professional (Ratul Biswas) targeting SEO/Digital Marketing/Growth roles. Awwwards-caliber quality with kinetic hero, masked line reveals, numbered manifesto chapters, editorial marquee, parallax, and Lenis smooth scrolling.

## User Personas
- **Recruiters / Hiring Managers** at digital agencies and product companies looking for SEO Executive, Digital Marketing Executive, Performance Marketing Executive, or Growth Marketing Executive.
- **Direct clients** exploring freelance or contract engagements.

## Architecture
- Frontend: React 19 + CRA/craco + TailwindCSS + Framer Motion + Lenis smooth scroll
- No backend required (contact uses `mailto:` protocol)
- Google Fonts: Plus Jakarta Sans (display), Playfair Display (editorial serif), Inter (body)
- Design system: dark navy palette (#0F172A base) with #3B82F6 / #06B6D4 / #8B5CF6 accents

## What's been implemented (2026-01)
- Kinetic hero with masked line-by-line reveal + spotlight-clipped portrait + parallax glows
- Sticky glassmorphic nav with mobile drawer
- About: numbered manifesto chapters + animated stat counters
- Experience: SM Solutions timeline with responsibilities, tags
- Editorial marquee section (Playfair italic)
- Skills bento grid (SEO / Digital Marketing / Tools / Soft Skills) with chip taxonomy
- Certifications grid (HubSpot, Simplilearn, Coursera, WsCube, MSME PPDC Agra, Great Learning)
- Education timeline (Brainware University, SGPA 9.75/10) + Academic Project feature card
- Achievements grid (6 cards)
- Why Hire Me section with parallax office image and 6 numbered value props
- Contact section: contact cards + mailto form + Google Maps embed + Sonner toasts
- Footer with quick links, back-to-top, meta
- Full SEO: meta tags, Open Graph, Twitter Card, Schema.org Person JSON-LD, canonical URL

## Prioritized Backlog
- P1: Add real resume PDF to `/app/frontend/public/resume.pdf`
- P1: Swap portrait placeholder with the candidate's actual photo
- P2: Add downloadable case study PDFs for SM Solutions campaigns
- P2: Live SEO audit tool (input a URL, run Lighthouse via serverless function)
- P2: Blog / articles section (MDX) to build topical authority
- P3: Analytics dashboard integration (GA4 API for a "live results" widget)

## Next Tasks
- Upload actual résumé to `/app/frontend/public/resume.pdf`
- Provide a professional headshot URL to replace the stock silhouette
- Wire domain and add `robots.txt` + `sitemap.xml` in `/public`
