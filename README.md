# Ahmad Subair — Portfolio

Personal portfolio site built with React 19, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Contact form

The contact form sends messages through [EmailJS](https://www.emailjs.com/) when these
variables are set (in a local `.env` file or in your hosting provider's settings):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

EmailJS's built-in "Contact Us" template works as is (the form sends `name`, `email`, `title`, `time` and `message`, plus `from_name`, `from_email` and `reply_to`). Without
these variables the form falls back to opening the visitor's email app with the
message pre-filled.

## Editing content

All text, links and projects live in `src/data/`:

```
src/data/site.js       name, email, CV path, nav links, palettes, marquee stack
src/data/projects.js   featured case studies, "more things I've built", hidden projects
src/data/skills.js     skill groups and the journey timeline
```

Project screenshots go in `public/projects/` (WebP, 1280×800 works well).

## Project structure

```
public/            CV, favicon, share image, screenshots, robots.txt, sitemap.xml
src/components/    page sections (Hero, About, Work, Skills, Journey, Contact, Footer)
                   plus building blocks (Rosette, ThemeSwitcher, Cursor, Reveal...)
src/hooks/         useInView, useMagnetic
src/index.css      the three palettes (Adire, Clay, Signal), animations and utilities
```

## Updating the CV

The CV is built from `cv/cv.html` (same fonts and colours as the site). To update it,
edit that file, open it in Chrome or Edge, choose **Print → Save as PDF** with paper
size **A4**, margins **None** and **Background graphics** on, and save it over
`public/Ahmad_Subair_CV.pdf`.
