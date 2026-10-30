# rafael-tanda-portfolio

Personal site and CV of Rafael Antonio Tanda Pretel. Static Astro site, no client-side framework, no trackers.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npx astro check   # type and template diagnostics
```

## Where the content lives

| File | Content |
| --- | --- |
| `src/data/profile.ts` | Name, headline, location, work authorization, education, languages |
| `src/data/projects.ts` | Case studies (`/work/<slug>/`) and smaller projects |
| `src/data/stack.ts` | Technologies shown on the home page |
| `src/data/cv.ts` | CV content in English (`/cv/`) and Spanish (`/cv/es/`) |

Search for `TODO` to find details that still need confirmation.

## Regenerating the CV PDFs

The PDFs in `public/` are printed from the CV pages. After changing `src/data/cv.ts`:

1. `npm run build && npx astro preview`
2. Open `/cv/` and `/cv/es/`, choose **Save as PDF** (A4, no margins, no headers).
3. Save them as `public/rafael-tanda-cv-en.pdf` and `public/rafael-tanda-cv-es.pdf`.

Both versions must fit on one A4 page.
