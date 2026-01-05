const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Company A',
      period: '2022 - Present',
      logo: '🏢',
      description: [
        'Led development of ML models serving 1M+ users',
        'Implemented data pipelines reducing processing time by 60%',
        'Mentored junior analysts and conducted code reviews',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Startup Inc',
      period: '2020 - 2022',
      logo: '🚀',
      description: [
        'Built predictive models using Python and scikit-learn',
        'Optimized database queries improving performance by 40%',
        'Created interactive dashboards using Tableau and Power BI',
      ],
    },
    {
      title: 'Junior Data Analyst',
      company: 'Analytics Firm',
      period: '2019 - 2020',
      logo: '📊',
      description: [
        'Analyzed large datasets to extract business insights',
        'Participated in agile development processes',
        'Created reports and visualizations for stakeholders',
      ],
    },
  ];

  return (
    <div className="max-w-full">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-primary mb-4">
        Experience
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

      {/* Tree Structure */}
      <div className="relative">
        {/* Vertical trunk line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-accent/30"></div>

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-20 md:pl-28">
              {/* Branch node */}
              <div className="absolute left-8 md:left-12 top-6 w-8 md:w-12 h-0.5 bg-accent/30"></div>

              {/* Circle node with logo */}
              <div className="absolute left-4 md:left-6 top-2 w-16 h-16 bg-white border-4 border-accent rounded-full flex items-center justify-center shadow-lg text-2xl">
                {exp.logo}
              </div>

              {/* Content Card */}
              <div className="bg-luxury-cream p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent/20">
                <div className="mb-3">
                  <span className="inline-block px-4 py-1.5 bg-gold-gradient text-primary text-sm font-semibold rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary mb-2">{exp.title}</h3>
                <p className="text-lg text-accent font-semibold mb-4">{exp.company}</p>
                <ul className="space-y-2 text-neutral-700">
                  {exp.description.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-accent mt-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
