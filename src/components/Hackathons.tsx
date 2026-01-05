import React, { useRef, useState } from 'react';

const Hackathons = () => {
  const hackathons = [
    {
      title: 'OGP Community Hackathon 2025',
      position: 'Sparks Community Innovation Fund',
      date: 'July 2025',
      project: 'Churp',
      description:
        'A web allotment garden booking system with Sparks Community Innovation Taskforce @ Tengah.',
      // technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      award: '🏆',
    },
    {
      title: 'SIT HackRift 2025',
      position: 'Finalist',
      date: 'December 2025',
      project: 'GuideMeSG',
      description:
        'Empowering Persons with Intellectual Disabilities to navigate Singapore\'s public transport independently with AR guidance, real-time alerts, and emergency support.',
      // technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      award: '⭐',
    },
    {
      title: 'SMU Hack For Cities 2025',
      position: 'Finalist',
      date: 'February 2025',
      project: 'GreenMerlion',
      description:
        'A recycling web application that includes a computer vision for waste classification, chatbot, and gamification system.',
      // technologies: ['Python', 'PyTorch', 'Redis', 'Docker'],
      award: '⭐',
    },
    {
      title: 'Google for Startups Cloud Hackathon Singapore 2022',
      position: 'Top 20',
      date: 'May 2022',
      project: 'CareFall Vision',
      description:
        ' computer vision and pose estimation to detect seniors who fell down at home, alerting their caregiver for assistance.',
      // technologies: ['Python', 'OpenCV', 'TensorFlow', 'MongoDB'],
      award: '⭐',
    },
  ];

  // Advanced Interactive Card with 3D Tilt & Spotlight
  const HackathonCard = ({ hack }: { hack: typeof hackathons[0] }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      // Calculate Rotation for 3D Tilt Effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -2; // Max rotation 2deg
      const rotateY = ((x - centerX) / centerX) * 2;  // Max rotation 2deg

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
      setRotation({ x: 0, y: 0 }); // Reset rotation on leave
    };

    return (
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: 'transform 0.1s ease-out', // Smooth instantaneous movement
        }}
        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white px-8 py-10 shadow-lg transition-shadow duration-300 hover:shadow-2xl group cursor-pointer"
      >
        {/* Spotlight Overlay (Gold Glow) */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 169, 96, 0.1), transparent 40%)`,
          }}
        />
        
        {/* Border Reveal (Gold) */}
        <div
            className="pointer-events-none absolute inset-0 transition duration-300 group-hover:opacity-100"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(201, 169, 96, 0.4), transparent 40%)`,
                maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                maskClip: 'content-box, border-box',
                padding: '1px',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
            }}
        />

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col transform transition-transform duration-300 group-hover:translate-z-10" style={{ transformStyle: 'preserve-3d' }}>
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <span className="inline-block self-start px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase border rounded-full text-accent border-accent/20 bg-luxury-cream shadow-sm">
                {hack.date}
              </span>
              <h3 className="text-2xl font-bold font-serif text-primary transition-colors duration-300 group-hover:text-accent">
                {hack.title}
              </h3>
            </div>
            {/* Floating Award Icon */}
            <div 
                className="flex items-center justify-center w-14 h-14 text-4xl bg-luxury-cream rounded-full border border-accent/20 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:rotate-12"
                style={{ transform: `translate(${rotation.y * 3}px, ${rotation.x * 3}px)` }} // Parallax effect
            >
              {hack.award}
            </div>
          </div>

          <div className="mb-6 flex-grow">
            <h4 className="text-lg font-semibold text-secondary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              {hack.project}
            </h4>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
              {hack.description}
            </p>
          </div>

          {/* Footer Info */}
          <div className="pt-6 border-t border-neutral-100 mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-primary flex items-center gap-2 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
                <span className="text-accent">🏅</span> {hack.position}
              </span>
            </div>
            
            {/* <div className="flex flex-wrap gap-2">
              {hack.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-50 rounded-md border border-neutral-200 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-white group-hover:text-primary group-hover:shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="hackathons" className="section-padding bg-luxury-cream overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20 relative">
             {/* Background decorative blur */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-5xl md:text-6xl font-bold font-serif text-primary mb-5 relative inline-block z-10">
              Hackathons
              {/* Decorative Sparkle */}
              <span className="absolute -top-6 -right-8 text-5xl animate-pulse text-accent filter drop-shadow-lg">✨</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-6"></div>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Pushing boundaries and building innovative solutions in high-pressure environments.
            </p>
          </div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 gap-8 perspective-1000">
            {hackathons.map((hack, idx) => (
              <HackathonCard key={idx} hack={hack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;