# Zulfaqar Hafez — Portfolio Website

**"Apparatus & Method for Applied Intelligence"** — a personal portfolio designed as a patent
drawing. Light mode is drafting paper; dark mode is a blueprint. Built with React, TypeScript,
and Tailwind CSS 4.

## Design concept

Every section is a numbered figure in a patent filing:

1. **Fig. 1 — The Applicant**: hero with an annotated portrait (reference numerals included), a
   specifications table, and a perception → reasoning → verification pipeline schematic
2. **Materials & Components**: marquee strip of core tools
3. **Fig. 2 — Abstract & Claims**: about section written as a patent abstract with numbered claims
4. **Fig. 3 — Bill of Materials**: technical skills as a parts list
5. **Fig. 4 — The Exhibits**: projects as lettered exhibits, plus published Hugging Face weights
6. **Fig. 5 — Field Trials**: hackathon record as a ledger table
7. **Fig. 6 — Record of Service**: experience timeline, education, and certifications ledger
8. **Fig. 7 — Correspondence**: contact channels
9. **Title block footer**: drawn by / checked by / scale / sheet 1 of 1

Details: a CAD-style crosshair cursor with live coordinates (desktop only), rubber-stamp
accents with distressed ink, corner registration ticks on panels, and scroll-drawn SVG schematics.
All animation respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview
```

## Customization

- Content lives in the components under [src/components](src/components):
  [Hero.tsx](src/components/Hero.tsx), [AboutSkills.tsx](src/components/AboutSkills.tsx),
  [ProjectsHackathons.tsx](src/components/ProjectsHackathons.tsx),
  [ExperienceEducation.tsx](src/components/ExperienceEducation.tsx),
  [Contact.tsx](src/components/Contact.tsx), [Footer.tsx](src/components/Footer.tsx)
- Design tokens (paper/blueprint palettes, type, textures) live in
  [src/index.css](src/index.css)

## Technologies

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4** (CSS-first config)
- Fonts: Instrument Serif, IBM Plex Mono, Inter

## Author

Zulfaqar Hafez · [GitHub](https://github.com/ZulfaqarHafez) ·
[LinkedIn](https://linkedin.com/in/zulfaqar-hafez) ·
[Hugging Face](https://huggingface.co/Zulfhagez)
