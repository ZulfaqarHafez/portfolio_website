const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description:
        'ML model predicting customer churn with 92% accuracy using ensemble methods and feature engineering.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-blue-600 to-primary',
      icon: '🎯',
    },
    {
      title: 'Sales Forecasting Dashboard',
      description:
        'Interactive dashboard with time-series forecasting for sales prediction and trend analysis.',
      technologies: ['Python', 'Prophet', 'Tableau', 'SQL'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-primary to-secondary',
      icon: '📈',
    },
    {
      title: 'NLP Sentiment Analysis Tool',
      description:
        'Real-time sentiment analysis of customer reviews using transformer models and deep learning.',
      technologies: ['Python', 'TensorFlow', 'BERT', 'Flask'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-secondary to-accent',
      icon: '💬',
    },
    {
      title: 'Big Data ETL Pipeline',
      description:
        'Scalable data pipeline processing 10M+ records daily with automated quality checks and monitoring.',
      technologies: ['PySpark', 'Airflow', 'AWS', 'Snowflake'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-accent to-primary',
      icon: '⚙️',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-center text-primary mb-5">
            Projects
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-20 rounded-full"></div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-accent/20"
              >
                {/* Project Image Placeholder */}
                <div className={`h-56 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-8xl">{project.icon}</div>
                  {/* Image placeholder text */}
                  <div className="absolute top-2 right-2 bg-luxury-charcoal/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-accent/30">
                    <p className="text-xs text-accent">Add project image</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-serif text-primary mb-3">{project.title}</h3>
                  <p className="text-neutral-700 mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-luxury-cream text-primary text-sm font-medium rounded-lg border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-neutral-700 hover:text-accent transition-colors font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-neutral-700 hover:text-accent transition-colors font-medium"
                    >
                      <svg
                        className="w-5 h-5"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
