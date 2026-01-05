const Hackathons = () => {
  const hackathons = [
    {
      title: 'AI for Good Hackathon 2023',
      position: '1st Place Winner',
      date: 'November 2023',
      project: 'Healthcare Diagnosis Assistant',
      description:
        'Built an AI-powered diagnostic tool using computer vision and NLP to assist doctors in preliminary diagnosis.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      award: '🏆',
    },
    {
      title: 'Data Science Challenge',
      position: 'Top 5 Finalist',
      date: 'August 2023',
      project: 'Predictive Maintenance System',
      description:
        'Developed ML models to predict equipment failures in manufacturing, reducing downtime by 35%.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      award: '🥈',
    },
    {
      title: 'FinTech Innovation Summit',
      position: '2nd Place',
      date: 'May 2023',
      project: 'Fraud Detection Engine',
      description:
        'Created real-time fraud detection system using anomaly detection and deep learning algorithms.',
      technologies: ['Python', 'PyTorch', 'Redis', 'Docker'],
      award: '🥈',
    },
    {
      title: 'Smart City Hackathon',
      position: 'Best Technical Implementation',
      date: 'March 2023',
      project: 'Traffic Flow Optimizer',
      description:
        'Built intelligent traffic management system using computer vision and reinforcement learning.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'MongoDB'],
      award: '⭐',
    },
  ];

  return (
    <section id="hackathons" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-luxury-cream mb-4">
            Hackathons & Competitions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="bg-secondary rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-accent/20 group"
              >
                {/* Header with Award */}
                <div className="bg-gold-gradient p-6 relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-5xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {hack.award}
                  </div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-primary/30 backdrop-blur-sm text-primary text-xs font-semibold rounded-full mb-3">
                      {hack.date}
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-primary mb-2">{hack.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{hack.award}</span>
                      <p className="text-luxury-charcoal font-semibold text-lg">{hack.position}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-luxury-cream mb-3">{hack.project}</h4>
                  <p className="text-neutral-300 mb-4 leading-relaxed">{hack.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {hack.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-luxury-charcoal text-accent text-sm font-medium rounded-lg border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
