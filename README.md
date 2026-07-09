# Zulfaqar Hafez — Portfolio Website

**The Estate** — a luxury emerald-and-champagne-gold portfolio. Dark mode is a deep emerald
estate at dusk; light mode is ivory parchment with antique gold. Built with React, TypeScript,
and Tailwind CSS 4.

## Design

- **Palette**: deep emerald surfaces, champagne-gold accents, parchment neutrals — 2–3 core
  colors, luxury-by-restraint
- **Type**: Fraunces (display, with italics), Space Grotesk (body), JetBrains Mono (labels)
- **Hero**: oversized kinetic headline ("I build AI that *sees / learns / ships / grows*"),
  breathing gold glow, floating chips, magnetic gold-gradient buttons
- **Work**: featured project card plus an interactive list — a live image preview follows the
  cursor across each row (desktop)
- **Skills**: numeral-watermarked craft cards with animated gold hairlines and a
  proof-over-progress-bars philosophy
- **Credentials**: dedicated showcase with issuer-tinted badges (NVIDIA ×3, AI Singapore,
  HackerRank, Google)
- **Journey**: a timeline vine that grows in on scroll
- **Details**: cursor-trailing glow, film grain, gold sheen sweeps, scroll-progress hairline,
  live Singapore clock in the contact section
- All animation respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Customization

- Content lives in [src/components](src/components): `Hero.tsx`, `AboutSkills.tsx`,
  `ProjectsHackathons.tsx`, `ExperienceEducation.tsx`, `Contact.tsx`
- Design tokens (both palettes, type, motion) live in [src/index.css](src/index.css)

## Author

Zulfaqar Hafez · [GitHub](https://github.com/ZulfaqarHafez) ·
[LinkedIn](https://linkedin.com/in/zulfaqar-hafez) ·
[Hugging Face](https://huggingface.co/Zulfhagez)
