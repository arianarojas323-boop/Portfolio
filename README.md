# Ariana Rojas — Portfolio

React + Vite rebuild of the original bundled HTML portfolio. Same visuals,
same scroll-driven fish animation, but split into editable components.

## Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

## Structure

```
src/
  components/
    App.jsx           — scroll-driven fish animation logic + page layout
    Fish.jsx           — the animated fish mascot
    Identity.jsx        — top-left name badge
    Nav.jsx             — top-right nav (Fish / Work / CV / Contact)
    ScrollHint.jsx       — bottom "Scroll ↓" hint, shown only on the intro
    Narrative.jsx        — the fish's scrolling story (ends at the bio statement)
    Work.jsx             — horizontally scrollable project cards
    ProjectCard.jsx       — single project card, opens the PDF lightbox on click
    PdfLightbox.jsx        — full-screen overlay that embeds a project's PDF
    CV.jsx                — experience / skills / résumé download
    Contact.jsx            — contact section
  data/
    projects.js            — single source of truth for project cards + PDFs
  assets/                    — images used by components (fish, thumbnails)
  styles/
    global.css                — base reset, keyframe animations, scrollbar styling
public/
  assets/
    parkinson.pdf              — Mielina case study PDF
    sign.pdf                    — Sign Language case study PDF
```

## Adding / editing projects

Edit `src/data/projects.js`. Each entry needs:

- `title`, `tag` — shown on the card
- `thumb` — imported image from `src/assets`
- `pdf` — path to a file in `public/assets` (or `null` if not ready yet,
  which shows a "Case study coming soon" placeholder in the lightbox)

To add project 03/04 PDFs later: drop the file in `public/assets/`,
then set `pdf: '/assets/your-file.pdf'` in `projects.js`.

## Notes on the PDFs

The original PDFs you supplied were extremely heavy (a few hundred MB combined),
because each is effectively one giant page exported from a design tool with very
high-resolution embedded images. They've been rasterized and recompressed into
multi-page PDFs (~4–10 MB each) that look identical on screen but load fast in
the in-page viewer. The original full-resolution files were not kept in this
project — if you need the source-quality files for printing, export them again
from your design tool at a more moderate resolution.

## Where to put your real résumé

`CV.jsx` links to `/assets/cv.pdf`. Add your résumé PDF at `public/assets/cv.pdf`
to make that link work (a placeholder file is not included).

## Where to put real contact info

`Contact.jsx` currently has a placeholder email and social links — update those
directly in `src/components/Contact.jsx`.
