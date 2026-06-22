import { useTheme } from '../contexts/ThemeContext';

const ProjectsHackathons = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      title: 'GuideMeSG Mobile App',
      description:
        'Empowering Persons with Intellectual Disabilities to navigate Singapore\'s public transport independently.',
      technologies: ['Next.js', 'TypeScript', 'Supabase'],
      github: 'https://github.com/ZulfaqarHafez/GuideMeSG',
      live: 'https://guide-me-sg-r22y.vercel.app/',
      image: '/images/guideme.png',
      role: 'Lead Developer',
    },
    {
      title: 'PPE Compliance Dashboard',
      description:
        'Real-time PPE compliance monitoring with pose-aware validation and cloud-based tracking.',
      technologies: ['FastAPI', 'YOLOv8', 'Mediapipe'],
      github: 'https://github.com/ZulfaqarHafez/AAI3001_Deep_Learning',
      live: 'https://youtu.be/0caldjkLU7g',
      image: '/images/ppecompliance.png',
      role: 'ML Engineer',
    },
    {
      title: 'EduQuery SG',
      description:
        'Centralized platform for Singapore\'s educational landscape with search and analytics.',
      technologies: ['Node.js', 'MongoDB', 'PostgreSQL'],
      github: 'https://github.com/ZulfaqarHafez/INF2003_EduQuery',
      live: 'https://youtu.be/Wo4YhykGx-8',
      image: '/images/eduquery.png',
      role: 'Full Stack Developer',
    },
    {
      title: 'Fairwork Contract',
      description:
        'Translate English payslips to native languages for foreign workers in Singapore.',
      technologies: ['Next.js', 'Gemini', 'FastAPI'],
      github: 'https://github.com/KevanSoon/FairWork-Contract',
      live: 'https://fair-work-contract.vercel.app/',
      image: '/images/fairwork.png',
      role: 'Backend Developer',
    },
  ];

  const hackathons = [
    {
      title: 'Google Cloud Hackathon 2022',
      date: 'May 2022',
      position: 'Top 20',
      project: 'CareFall Vision',
      description: 'CV & Pose Estimation to detect seniors who fell at home.',
      award: '⭐',
    },
    {
      title: 'SMU Hack For Cities 2025',
      date: 'Feb 2025',
      position: 'Finalist',
      project: 'GreenMerlion',
      description: 'Recycling app with CV waste classification & gamification.',
      award: '⭐',
    },
    {
      title: 'OGP Hackathon 2025',
      date: 'Jul 2025',
      position: '20k Funded',
      project: 'Churp',
      description: 'Allotment garden booking system for Tengah community.',
      award: '🏆',
    },
    {
      title: 'SIT HackRift 2025',
      date: 'Dec 2025',
      position: 'Finalist',
      project: 'GuideMeSG',
      description: 'AR navigation for persons with intellectual disabilities.',
      award: '⭐',
    },
  ];

  const [featuredProject, ...otherProjects] = projects;

  const ProjectCard = ({
    project,
    isFeatured = false,
  }: {
    project: typeof projects[0];
    isFeatured?: boolean;
  }) => {
    return (
      <article
        className={`group relative tech-card tech-card-hover ${isFeatured ? '' : 'h-full'} overflow-hidden transition-all duration-300 hover:-translate-y-1 tech-luxury-outline`}
      >
        <div className={`grid ${isFeatured ? 'md:grid-cols-[1.05fr_0.95fr]' : 'grid-cols-1'}`}>
          <div className={`relative overflow-hidden ${isFeatured ? 'project-media-featured' : 'project-media-standard'}`}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-t from-primary/70 via-primary/10 to-transparent' : 'bg-linear-to-t from-primary/30 via-primary/0 to-transparent'}`}></div>
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-primary text-[11px] font-semibold rounded-full font-tech-mono card-chip-readable">
              {project.role}
            </span>
          </div>

          <div className={`p-4 md:p-5 ${isFeatured ? '' : 'flex h-full flex-col'}`}>
            <h3 className={`card-title-readable font-bold mb-2 leading-tight ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'} ${isDark ? 'text-luxury-cream group-hover:text-accent' : 'text-primary group-hover:text-luxury-gold-dark'} transition-colors`}>
              {project.title}
            </h3>

            <p className={`text-sm mb-3 card-text-readable card-muted-readable ${isFeatured ? '' : 'line-clamp-3'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-2.5 py-1 text-xs rounded-full border card-chip-readable ${
                    isDark ? 'bg-primary/70 card-subtle-readable border-accent/20' : 'bg-neutral-50 card-subtle-readable border-neutral-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className={`flex items-center gap-5 pt-3 border-t ${isDark ? 'border-accent/20' : 'border-neutral-200'} ${isFeatured ? '' : 'mt-auto'}`}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold transition-colors font-tech-mono card-subtle-readable ${isDark ? 'hover:text-accent' : 'hover:text-luxury-gold-dark'}`}
              >
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold transition-colors font-tech-mono card-subtle-readable ${isDark ? 'hover:text-accent' : 'hover:text-luxury-gold-dark'}`}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
          <div className="absolute inset-0 scan-sheen"></div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className={`relative py-14 md:py-20 transition-colors duration-300 ${isDark ? 'section-tone-dark-projects' : 'section-tone-light-projects'}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-16 right-8 w-56 h-56 rounded-full blur-3xl ${isDark ? 'bg-accent/8' : 'bg-accent/12'}`}></div>
        <div className={`absolute bottom-10 left-6 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-secondary/22' : 'bg-secondary/12'}`}></div>
        <div className={`absolute inset-0 tech-grid-soft ${isDark ? 'opacity-[0.05]' : 'opacity-[0.04]'}`}></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10 text-center scroll-fade-in">
            <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Work and Competitions
            </p>
            <h2 className={`section-title mb-3 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
              Projects and Hackathons
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-7 lg:gap-8 items-start">
            <div id="projects-list" className="scroll-fade-in-left">
              <div className="mb-4">
                <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                  Projects
                </h3>
              </div>

              <ProjectCard project={featuredProject} isFeatured />

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 stagger-children">
                {otherProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>

            <aside id="hackathons" className="scroll-fade-in-right">
              <div className="mb-4">
                <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                  Hackathons
                </h3>
              </div>

              <div className="relative tech-card tech-card-pad tech-luxury-outline">
                <div className="absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-accent via-accent/35 to-transparent" aria-hidden="true"></div>

                <div className="space-y-4">
                  {hackathons.map((hack, idx) => (
                    <article key={idx} className="relative pl-8 group">
                      <div className={`absolute left-[0.35rem] top-4 w-3 h-3 rounded-full border-2 border-accent ${isDark ? 'bg-secondary' : 'bg-white'} group-hover:bg-accent transition-colors`}></div>
                      <div className="relative tech-card-panel transition-all duration-300 group-hover:-translate-y-0.5 tech-luxury-outline">
                        <div className="relative z-10">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-xl leading-none" aria-hidden="true">{hack.award}</span>
                            <span className="text-xs font-tech-mono card-subtle-readable">{hack.date}</span>
                          </div>
                          <h4 className={`card-title-readable text-sm sm:text-base font-bold leading-tight mb-1 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                            {hack.title}
                          </h4>
                          <p className="accent-readable card-title-readable text-xs sm:text-sm font-semibold mb-1">{hack.project}</p>
                          <p className="text-xs sm:text-sm card-text-readable card-muted-readable mb-2">
                            {hack.description}
                          </p>
                          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border border-accent/25 bg-accent/10 accent-readable font-tech-mono card-chip-readable">
                            {hack.position}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold accent-readable hover:opacity-80 transition-opacity"
              >
                Open to collaboration
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </aside>
          </div>

          <div className="mt-7 md:mt-8 scroll-fade-in">
            <div className="tech-card tech-card-pad tech-luxury-outline flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gold-gradient text-primary flex items-center justify-center font-tech-mono font-bold text-sm">
                  HF
                </div>
                <div>
                  <p className="section-kicker accent-readable mb-1">Published on Hugging Face</p>
                  <h4 className={`card-title-readable text-base sm:text-lg font-bold ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                    ClaimLens, a DeBERTa-v3 inference model
                  </h4>
                  <p className="text-sm mt-1 card-text-readable card-muted-readable max-w-2xl">
                    A fine-tuned natural language inference model that scores whether evidence supports,
                    refutes, or stays neutral toward a claim. Open weights, live on the Hub.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['PyTorch', 'Transformers', 'DeBERTa-v3'].map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs rounded-full border card-chip-readable font-tech-mono ${
                          isDark ? 'bg-primary/70 card-subtle-readable border-accent/20' : 'bg-neutral-50 card-subtle-readable border-neutral-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="https://huggingface.co/Zulfhagez"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border-2 border-accent font-semibold text-sm font-tech-mono accent-readable hover:bg-accent hover:text-primary transition-all duration-300 shrink-0"
              >
                View on Hugging Face
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHackathons;
