import type { ComponentType } from 'react';
import {
  GlyphRazor,
  GlyphShield,
  GlyphDocLens,
  GlyphOrchestra,
  GlyphAgents,
  GlyphWave,
} from './art/LabGlyphs';

interface Experiment {
  name: string;
  blurb: string;
  tech: string[];
  href: string;
  glyph: ComponentType;
  wide?: boolean;
}

const experiments: Experiment[] = [
  {
    name: 'TraceRazor',
    blurb:
      'A Rust auditor that bills AI agents for every wasted token — eight efficiency signals, a 0–100 audit score, and cryptographically signed receipts.',
    tech: ['Rust', 'Python', 'Ed25519'],
    href: 'https://github.com/ZulfaqarHafez/TraceRazor',
    glyph: GlyphRazor,
    wide: true,
  },
  {
    name: 'Assay',
    blurb:
      'Adversarial probes that prove an agent\'s guardrails actually hold before it ships. Trust, but verify. Mostly verify.',
    tech: ['FastAPI', 'Next.js', 'Sandboxing'],
    href: 'https://github.com/ZulfaqarHafez/Assay',
    glyph: GlyphShield,
  },
  {
    name: 'AgenticPDF',
    blurb:
      'A local-first document workbench that shows its work — every search, rerank, and citation inspectable. No API key required.',
    tech: ['Next.js', 'ONNX', 'SQLite'],
    href: 'https://github.com/ZulfaqarHafez/AgenticPDF',
    glyph: GlyphDocLens,
  },
  {
    name: 'Apologue',
    blurb:
      'A goal-driven orchestration framework for Claude Code — planning, adversarial review, and handoffs, all in markdown.',
    tech: ['Claude Code', 'JavaScript', 'Shell'],
    href: 'https://github.com/ZulfaqarHafez/Apologue',
    glyph: GlyphOrchestra,
  },
  {
    name: 'AgenticAgentAgenting',
    blurb:
      'A multi-agent playground where specialists coordinate through a circle-junction scheduler. Yes, that is the real name.',
    tech: ['LangGraph', 'FastAPI', 'Next.js'],
    href: 'https://github.com/ZulfaqarHafez/AgenticAgentAgenting',
    glyph: GlyphAgents,
  },
  {
    name: 'OsciWriting',
    blurb:
      'A 50,000-prompt measurement study on whether LLM response caching is actually worth it — pre-registered rubric, like real science.',
    tech: ['Python', 'UMAP', 'HDBSCAN'],
    href: 'https://github.com/ZulfaqarHafez/OsciWriting',
    glyph: GlyphWave,
  },
];

const TheLab = () => {
  return (
    <section id="lab" className="relative py-20 md:py-28 overflow-hidden">
      <div className="glow-blob w-[26rem] h-[26rem] top-16 -left-32" style={{ background: 'radial-gradient(circle, var(--glow-b), transparent 70%)', position: 'absolute' }} aria-hidden="true"></div>

      <div className="container-custom relative z-10 px-5 sm:px-8">
        <div className="scroll-fade-in flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-14">
          <div>
            <p className="label t-accent mb-4">05 — The lab</p>
            <h2 className="display-hero t-ink text-4xl sm:text-5xl lg:text-6xl">
              Current obsessions<span className="t-accent">.</span>
            </h2>
          </div>
          <p className="t-faint text-sm max-w-xs leading-relaxed">
            This year's rabbit hole: agentic AI — auditing it, guardrailing it, orchestrating it.
            Fresh from the commit log.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {experiments.map((exp) => {
            const Glyph = exp.glyph;
            return (
              <a
                key={exp.name}
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card card-hover sheen p-6 flex flex-col group ${exp.wide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-xl border b-line bg-accent-wash p-2.5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Glyph />
                  </div>
                  <span className="label t-faint transition-colors group-hover:t-accent">2026 ↗</span>
                </div>
                <h3 className="font-display text-2xl t-ink mb-2 group-hover:t-accent transition-colors leading-snug">
                  {exp.name}
                </h3>
                <p className="t-soft text-sm leading-relaxed mb-5">{exp.blurb}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
                  {exp.tech.map((t) => (
                    <span key={t} className="label t-faint">{t}</span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        <p className="scroll-fade-in t-faint text-sm mt-6 max-w-2xl leading-relaxed">
          Also somewhere in the commit history: a full-stack app built for exactly two users, with a
          RAG-powered study buddy. No, you can't have the link<span className="t-accent">.</span>
        </p>
      </div>
    </section>
  );
};

export default TheLab;
