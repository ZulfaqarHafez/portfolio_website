const projects = [
  {
    exhibit: 'A',
    title: 'GuideMeSG',
    description:
      'Mobile app empowering persons with intellectual disabilities to navigate Singapore’s public transport independently. SIT HackRift finalist, still in active development.',
    technologies: ['Next.js', 'TypeScript', 'Supabase'],
    github: 'https://github.com/ZulfaqarHafez/GuideMeSG',
    live: 'https://guide-me-sg-r22y.vercel.app/',
    image: '/images/guideme.png',
    role: 'Lead Developer',
  },
  {
    exhibit: 'B',
    title: 'PPE Compliance Dashboard',
    description:
      'Real-time PPE compliance monitoring with pose-aware validation — YOLOv8 detection cross-checked against Mediapipe skeletons, tracked in the cloud.',
    technologies: ['YOLOv8', 'Mediapipe', 'FastAPI'],
    github: 'https://github.com/ZulfaqarHafez/AAI3001_Deep_Learning',
    live: 'https://youtu.be/0caldjkLU7g',
    image: '/images/ppecompliance.png',
    role: 'ML Engineer',
  },
  {
    exhibit: 'C',
    title: 'HelpLah.AI',
    description:
      'AI-powered virtual assistant that triages and routes help requests so the right people see them faster. Flask backend, ML-driven classification.',
    technologies: ['Flask', 'Machine Learning', 'NLP'],
    github: 'https://github.com/ZulfaqarHafez/HelpLah.AI',
    live: null,
    image: null,
    role: 'Creator',
  },
  {
    exhibit: 'D',
    title: 'EduQuery SG',
    description:
      'Centralized platform for Singapore’s educational landscape — search and analytics across schools and courses, backed by dual databases.',
    technologies: ['Node.js', 'MongoDB', 'PostgreSQL'],
    github: 'https://github.com/ZulfaqarHafez/INF2003_EduQuery',
    live: 'https://youtu.be/Wo4YhykGx-8',
    image: '/images/eduquery.png',
    role: 'Full Stack Developer',
  },
  {
    exhibit: 'E',
    title: 'FairWork Contract',
    description:
      'Translates English payslips into native languages for foreign workers in Singapore, so nobody signs what they can’t read.',
    technologies: ['Next.js', 'Gemini', 'FastAPI'],
    github: 'https://github.com/KevanSoon/FairWork-Contract',
    live: 'https://fair-work-contract.vercel.app/',
    image: '/images/fairwork.png',
    role: 'Backend Developer',
  },
];

const trials = [
  { year: '2026', event: 'SMU Hack For Cities', project: 'Urban systems', result: 'Finalist', top: true },
  { year: '2025', event: 'SIT HackRift', project: 'GuideMeSG', result: 'Finalist', top: true },
  { year: '2025', event: 'OGP Community Hackathon', project: 'Churp — allotment garden booking for Tengah', result: 'CIT funded · $20k', top: true },
  { year: '2025', event: 'Pan-SEA AI Developer Challenge', project: 'Regional AI challenge', result: 'Top 100', top: false },
  { year: '2025', event: 'SMU Hack For Cities', project: 'GreenMerlion — CV waste classification', result: 'Finalist', top: true },
  { year: '2022', event: 'Google Cloud Hackathon SG', project: 'CareFall Vision — fall detection for seniors', result: 'Top 20', top: false },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <article className="panel panel-hover ticks group flex flex-col">
    <span className="tick-b"></span>
    <div className="relative overflow-hidden m-3 mb-0 border b-line">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ filter: 'saturate(0.92)' }}
        />
      ) : (
        <div className="w-full aspect-[16/10] crosshatch flex items-center justify-center relative">
          <svg viewBox="0 0 220 100" className="w-3/5" fill="none" stroke="var(--line-strong)" strokeWidth="1" aria-hidden="true">
            <rect x="10" y="30" width="55" height="40" />
            <rect x="155" y="30" width="55" height="40" />
            <circle cx="110" cy="50" r="22" />
            <line x1="65" y1="50" x2="88" y2="50" />
            <line x1="132" y1="50" x2="155" y2="50" />
            <path d="M84 46 L 90 50 L 84 54" />
            <path d="M151 46 L 157 50 L 151 54" />
          </svg>
          <span className="absolute bottom-2 right-3 annot t-faint">Figure withheld</span>
        </div>
      )}
      <span className="absolute top-2.5 left-2.5 annot bg-raised t-ink border b-strong px-2 py-1">
        Exhibit {project.exhibit}
      </span>
    </div>

    <div className="p-4 sm:p-5 flex flex-col flex-1">
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <h3 className="font-display text-2xl t-ink group-hover:t-accent transition-colors">{project.title}</h3>
        <span className="annot t-faint shrink-0">{project.role}</span>
      </div>
      <p className="t-soft text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 pt-3 mt-auto border-t b-line">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="annot-md t-soft hover:t-accent transition-colors"
        >
          Source ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="annot-md t-soft hover:t-accent transition-colors"
          >
            Live demo ↗
          </a>
        )}
      </div>
    </div>
  </article>
);

const ProjectsHackathons = () => {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-paper-deep border-t b-line">
      <div className="container-custom px-4 sm:px-6">
        {/* Exhibits */}
        <div className="scroll-fade-in flex items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="annot t-accent mb-2">Fig. 4 · Evidence of practice</p>
            <h2 className="font-display t-ink text-4xl sm:text-5xl">The Exhibits</h2>
          </div>
          <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-3"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 stagger-children mb-16 md:mb-20">
          {projects.map((project) => (
            <ProjectCard key={project.exhibit} project={project} />
          ))}

          {/* Hugging Face card completes the grid */}
          <article className="panel panel-hover ticks group flex flex-col justify-between p-5 bg-accent-wash">
            <span className="tick-b"></span>
            <div>
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <span className="annot t-accent">Published weights</span>
                <span className="annot t-faint">🤗 Hub</span>
              </div>
              <h3 className="font-display text-2xl t-ink mb-2">ClaimLens</h3>
              <p className="t-soft text-sm leading-relaxed mb-4">
                A fine-tuned DeBERTa-v3 natural language inference model that scores whether evidence
                supports, refutes, or stays neutral toward a claim. Open weights, live on the Hub —
                verification, as promised in Fig. 1.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['PyTorch', 'Transformers', 'DeBERTa-v3'].map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://huggingface.co/Zulfhagez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost self-start"
            >
              View on Hugging Face ↗
            </a>
          </article>
        </div>

        {/* Field trials ledger */}
        <div id="hackathons" className="scroll-fade-in">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <p className="annot t-accent mb-2">Fig. 5 · Stress testing, self-inflicted</p>
              <h2 className="font-display t-ink text-3xl sm:text-4xl">Field Trials</h2>
            </div>
            <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-2.5"></div>
          </div>

          <div className="border b-strong bg-raised overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <thead>
                <tr className="border-b b-strong">
                  <th className="annot t-faint font-medium px-5 py-3 w-20">Year</th>
                  <th className="annot t-faint font-medium px-5 py-3">Trial</th>
                  <th className="annot t-faint font-medium px-5 py-3">Apparatus under test</th>
                  <th className="annot t-faint font-medium px-5 py-3 text-right">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {trials.map((trial, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-accent-wash ${idx > 0 ? 'border-t b-line' : ''}`}
                  >
                    <td className="font-annot text-xs t-faint px-5 py-3.5 align-top">{trial.year}</td>
                    <td className="t-ink text-sm font-medium px-5 py-3.5 align-top">{trial.event}</td>
                    <td className="t-soft text-sm px-5 py-3.5 align-top">{trial.project}</td>
                    <td className="px-5 py-3.5 align-top text-right">
                      <span
                        className={`annot inline-block border px-2 py-1 whitespace-nowrap ${
                          trial.top ? 't-accent b-accent bg-accent-wash' : 't-soft b-line'
                        }`}
                      >
                        {trial.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="annot t-faint mt-3 normal-case tracking-normal text-[0.7rem]">
            Six trials, zero regressions in enthusiasm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHackathons;
