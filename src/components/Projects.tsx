import React, { useRef, useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'GuideMeSG Mobile App',
      description:
        'Empowering Persons with Intellectual Disabilities to navigate Singapore\'s public transport independently with AR guidance, real-time alerts, and emergency support.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      github: 'https://github.com/ZulfaqarHafez/GuideMeSG',
      live: 'https://guide-me-sg-r22y.vercel.app/',
      image: '/images/guideme.png',
    },
    {
      title: 'PPE compliance Dashboard',
      description:
        'Real-time PPE compliance monitoring with pose-aware validation | Deployed full-stack web application with dynamic requirements and cloud-based history tracking',
      technologies: ['FastAPI', 'YOLOv8', 'Mediapipe', 'postgreSQL', 'supabase', 'Huggingface'],
      github: 'https://github.com/ZulfaqarHafez/AAI3001_Deep_Learning',
      live: 'https://youtu.be/0caldjkLU7g',
      image: '/images/ppecompliance.png',
    },
    {
      title: 'EduQuery SG',
      description:
        'Provide a centralized, searchable, and analytical platform for information regarding Singapore\'s educational landscape. It aggregates disparate data points into a unified user experience.',
      technologies: ['Node.js', 'MongoDB Atlas', 'PostgreSQL', 'Express.js', 'Leaftlet.js'],
      github: 'https://github.com/ZulfaqarHafez/INF2003_EduQuery',
      live: 'https://youtu.be/Wo4YhykGx-8',
      image: '/images/eduquery.png',
    },
    {
      title: 'Fairwork Contract',
      description:
        'A web application build for foreign workers in Singapore to help translate english payslips to their native language for a better understanding.',
      technologies: ['Next.js', 'Gemini', 'FastAPI', 'Hugging Face', 'PaddeOCR'],
      github: 'https://github.com/KevanSoon/FairWork-Contract',
      live: 'https://fair-work-contract.vercel.app/',
      image: '/images/fairwork.png',
    },
  ];

  // Interactive Project Card Component
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      // 3D Tilt Effect Logic
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3; // Max rotation 3deg
      const rotateY = ((x - centerX) / centerX) * 3;  // Max rotation 3deg

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
      setOpacity(1);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
      setRotation({ x: 0, y: 0 });
      setIsHovering(false);
    };

    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovering ? 'scale(1.02) translateY(-0.25rem)' : ''}`,
          transition: rotation.x === 0 && rotation.y === 0 ? 'all 0.3s ease' : 'none',
        }}
        className="group relative rounded-2xl bg-secondary border border-accent/20 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/10 card-entrance h-full flex flex-col"
      >
        {/* Spotlight Overlay */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-30"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 169, 96, 0.15), transparent 40%)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 h-full flex flex-col">

          {/* Image Section */}
          <div className="relative h-36 overflow-hidden border-b border-accent/20">
            {typeof project.image === 'string' && project.image.startsWith('bg-') ? (
              // Fallback Gradient
              <div className={`h-full w-full ${project.image} flex items-center justify-center`}>

              </div>
            ) : (
              // Real Image with Zoom Effect
              <div className="h-full w-full relative overflow-hidden">
                 <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-base md:text-lg font-bold font-serif text-luxury-cream mb-1.5 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-neutral-400 mb-3 text-xs leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-1.5 py-0.5 bg-luxury-charcoal text-neutral-300 text-xs font-medium rounded-md border border-accent/10 group-hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2.5 mt-auto pt-2.5 border-t border-accent/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors text-sm font-semibold group/link"
              >
                <svg className="w-5 h-5 transition-transform group-hover/link:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors text-sm font-semibold group/link"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover/link:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title - Compact */}
          <div className="text-center mb-6 md:mb-8 relative px-4">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-2 relative inline-block">
              Featured Projects
              <span className="absolute -top-2 -right-5 text-xl sm:text-2xl animate-pulse text-accent">🚀</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-2"></div>
            <p className="text-neutral-600 text-sm max-w-2xl mx-auto px-4">
              A showcase of technical solutions and creative problem solving.
            </p>
          </div>

          {/* Projects Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-5 px-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
