import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  blurb: string;
  tech: string[];
  github: string;
  live: string | null;
  image: string | null;
  role: string;
  year: string;
}

const featured: Project = {
  title: 'GuideMeSG',
  blurb:
    'A mobile app that helps persons with intellectual disabilities navigate Singapore\'s public transport on their own — turning a daunting daily journey into an independent one. SIT HackRift finalist, still growing.',
  tech: ['Next.js', 'TypeScript', 'Supabase'],
  github: 'https://github.com/ZulfaqarHafez/GuideMeSG',
  live: 'https://guide-me-sg-r22y.vercel.app/',
  image: '/images/guideme.png',
  role: 'Lead Developer',
  year: '2025',
};

const projects: Project[] = [
  {
    title: 'PPE Compliance Dashboard',
    blurb: 'Real-time safety monitoring: YOLOv8 detections cross-checked against Mediapipe pose skeletons.',
    tech: ['YOLOv8', 'Mediapipe', 'FastAPI'],
    github: 'https://github.com/ZulfaqarHafez/AAI3001_Deep_Learning',
    live: 'https://youtu.be/0caldjkLU7g',
    image: '/images/ppecompliance.png',
    role: 'ML Engineer',
    year: '2025',
  },
  {
    title: 'HelpLah.AI',
    blurb: 'AI assistant that triages and routes help requests so the right people see them faster.',
    tech: ['Flask', 'NLP', 'ML'],
    github: 'https://github.com/ZulfaqarHafez/HelpLah.AI',
    live: null,
    image: null,
    role: 'Creator',
    year: '2025',
  },
  {
    title: 'EduQuery SG',
    blurb: 'Search and analytics across Singapore\'s educational landscape, backed by dual databases.',
    tech: ['Node.js', 'MongoDB', 'PostgreSQL'],
    github: 'https://github.com/ZulfaqarHafez/INF2003_EduQuery',
    live: 'https://youtu.be/Wo4YhykGx-8',
    image: '/images/eduquery.png',
    role: 'Full Stack',
    year: '2024',
  },
  {
    title: 'FairWork Contract',
    blurb: 'Translates English payslips into native languages for foreign workers — nobody signs what they can\'t read.',
    tech: ['Next.js', 'Gemini', 'FastAPI'],
    github: 'https://github.com/KevanSoon/FairWork-Contract',
    live: 'https://fair-work-contract.vercel.app/',
    image: '/images/fairwork.png',
    role: 'Backend',
    year: '2025',
  },
];

const trophies = [
  { year: '2026', event: 'SMU Hack For Cities', project: 'Urban systems', result: 'Finalist', big: false },
  { year: '2025', event: 'OGP Community Hackathon', project: 'Churp — garden booking for Tengah', result: 'Funded · $20k', big: true },
  { year: '2025', event: 'SIT HackRift', project: 'GuideMeSG', result: 'Finalist', big: false },
  { year: '2025', event: 'SMU Hack For Cities', project: 'GreenMerlion — CV recycling', result: 'Finalist', big: false },
  { year: '2025', event: 'Pan-SEA AI Dev Challenge', project: 'Regional AI challenge', result: 'Top 100', big: false },
  { year: '2022', event: 'Google Cloud Hackathon', project: 'CareFall Vision — fall detection', result: 'Top 20', big: false },
];

const ProjectsHackathons = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const onMove = (e: MouseEvent) => {
      if (raf.current !== null) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = null;
        if (previewRef.current) {
          previewRef.current.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 110}px) scale(${previewSrc ? 1 : 0.9})`;
        }
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [previewSrc]);

  const linkFor = (p: Project) => p.live ?? p.github;

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-deep border-y b-line overflow-hidden">
      <div className="glow-blob w-[28rem] h-[28rem] top-10 -right-32" style={{ background: 'radial-gradient(circle, var(--glow-b), transparent 70%)', position: 'absolute' }} aria-hidden="true"></div>

      {/* Floating preview that follows the cursor (desktop) */}
      <div ref={previewRef} className={`project-preview hidden lg:block ${previewSrc ? 'on' : ''}`} aria-hidden="true">
        {previewSrc && <img src={previewSrc} alt="" />}
      </div>

      <div className="container-custom relative z-10 px-5 sm:px-8">
        <div className="scroll-fade-in flex flex-wrap items-end justify-between gap-4 mb-12 md:mb-14">
          <div>
            <p className="label t-accent mb-4">03 — Selected work</p>
            <h2 className="display-hero t-ink text-4xl sm:text-5xl lg:text-6xl">
              The harvest<span className="t-accent">.</span>
            </h2>
          </div>
          <p className="t-faint text-sm max-w-xs leading-relaxed">
            Every project here shipped to real users — no lab demos gathering dust.
          </p>
        </div>

        {/* Featured */}
        <a
          href={linkFor(featured)}
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-fade-in card card-hover overflow-hidden grid md:grid-cols-[1.1fr_0.9fr] mb-6 group block"
        >
          <div className="relative overflow-hidden">
            <img
              src={featured.image!}
              alt={featured.title}
              loading="lazy"
              decoding="async"
              className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] portrait-treat"
            />
            <span className="absolute top-4 left-4 chip !bg-surface-2">Featured · {featured.year}</span>
          </div>
          <div className="p-6 md:p-9 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="label t-faint">{featured.role}</span>
              <span
                className="w-10 h-10 rounded-full border b-strong flex items-center justify-center t-ink transition-all duration-300 group-hover:bg-accent-solid group-hover:t-on-accent group-hover:rotate-45"
                aria-hidden="true"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl t-ink mb-3 group-hover:t-accent transition-colors">
              {featured.title}
            </h3>
            <p className="t-soft leading-relaxed mb-6">{featured.blurb}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {featured.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </a>

        {/* Interactive list */}
        <div className="scroll-fade-in border-t b-strong mb-20 md:mb-24">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative grid grid-cols-[1fr_auto] lg:grid-cols-[4.5rem_1.4fr_1fr_auto] items-center gap-x-4 gap-y-2 py-6 lg:py-7 border-b b-line transition-colors duration-300 hover:bg-accent-wash lg:px-4 lg:-mx-4 lg:rounded-2xl lg:border-b lg:hover:border-transparent"
              onMouseOver={() => p.image && setPreviewSrc(p.image)}
              onMouseOut={(e) => {
                if (!(e.currentTarget as Node).contains(e.relatedTarget as Node)) setPreviewSrc(null);
              }}
            >
              <span className="hidden lg:block label t-faint">{p.year}</span>

              <div className="min-w-0">
                <h3 className="font-display text-2xl sm:text-3xl t-ink transition-all duration-300 group-hover:t-accent group-hover:translate-x-1.5">
                  {p.title}
                </h3>
                <p className="t-faint text-sm mt-1 lg:hidden">{p.blurb}</p>
              </div>

              <div className="hidden lg:block min-w-0">
                <p className="t-soft text-sm leading-relaxed">{p.blurb}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="label t-faint">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 justify-self-end col-start-2 row-start-1 lg:col-start-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip"
                  aria-label={`${p.title} source code`}
                >
                  Code
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip !border-strong"
                    aria-label={`${p.title} live demo`}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trophy shelf */}
        <div id="hackathons" className="scroll-fade-in">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="label t-accent mb-3">04 — Field wins</p>
              <h2 className="font-display t-ink text-3xl sm:text-4xl">The trophy shelf</h2>
            </div>
            <p className="label t-faint hidden sm:block">scroll sideways →</p>
          </div>

          <div className="shelf -mx-5 px-5 sm:mx-0 sm:px-0">
            {trophies.map((t) => (
              <article
                key={`${t.year}-${t.event}`}
                className={`card card-hover p-6 w-64 sm:w-72 flex flex-col ${t.big ? 'border-accent/40' : ''}`}
                style={t.big ? { borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)' } : undefined}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl t-faint">{t.year}</span>
                  <span
                    className={`label px-2.5 py-1.5 rounded-full border ${t.big ? 'bg-accent-solid t-on-accent border-transparent' : 'bg-accent-wash t-accent b-line'}`}
                  >
                    {t.result}
                  </span>
                </div>
                <h3 className="font-semibold t-ink text-lg leading-snug mb-1">{t.event}</h3>
                <p className="t-faint text-sm leading-relaxed">{t.project}</p>
              </article>
            ))}
          </div>
          <p className="t-faint text-sm mt-4">
            Six competitive finishes — including a <span className="t-accent font-medium">$20k CIT-funded</span> build
            now serving the Tengah community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHackathons;
