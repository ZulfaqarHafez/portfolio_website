import React, { useRef, useState } from 'react';

const ProjectsHackathons = () => {
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

  // Compact Project Card
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div
        ref={divRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`group relative rounded-xl bg-secondary border border-accent/20 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${isHovering ? 'scale-[1.02] -translate-y-1' : ''}`}
      >
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
          <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-accent/90 text-primary text-xs font-bold rounded">
            {project.role}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="text-base font-bold text-luxury-cream mb-1 group-hover:text-accent transition-colors line-clamp-1">
            {project.title}
          </h4>
          <p className="text-neutral-400 text-sm leading-relaxed mb-2 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-luxury-charcoal text-neutral-400 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-2 border-t border-accent/10">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent text-sm font-medium">
              Code →
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent text-sm font-medium">
              Demo →
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-12 md:py-16 bg-white">
      <div className="container-custom px-4">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            
            {/* Projects Column */}
            <div>
              <div className="mb-5">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-2">
                  Projects
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>

            {/* Hackathons Column - Vertical Timeline */}
            <div id="hackathons">
              <div className="mb-5">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-2">
                  Hackathons
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>
              
              {/* Vertical Timeline */}
              <div className="relative pl-6">
                {/* Timeline Line */}
                <div className="absolute left-[0.45rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"></div>
                
                <div className="space-y-3">
                  {hackathons.map((hack, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Node */}
                      <div className="absolute -left-[1.05rem] top-3 w-3 h-3 rounded-full bg-white border-2 border-accent z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(201,169,96,0.6)]"></div>
                      
                      {/* Card */}
                      <div className="bg-secondary rounded-xl p-4 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{hack.award}</span>
                            <span className="px-2.5 py-0.5 text-xs font-bold text-accent bg-accent/10 rounded-full border border-accent/20">
                              {hack.position}
                            </span>
                          </div>
                          <span className="text-xs text-neutral-400 font-medium">
                            {hack.date}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-luxury-cream mb-1 group-hover:text-accent transition-colors">
                          {hack.title}
                        </h4>
                        <p className="text-accent text-sm font-semibold mb-1">{hack.project}</p>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {hack.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHackathons;
