const Experience = () => {
  const experiences = [
    {
      title: 'Product Manager (Citizen Developer)',
      company: 'People\'s Association',
      period: 'Sept 2025 - Present',
      description: [
        'Primary liaison between technical team and PA, translating community requirements into technical specs.',
        'Led product roadmap for community garden initiative, prioritizing features for local residents.',
        'Conducted on-ground requirements gathering to support allotment garden operations.',
      ],
    },
    {
      title: 'President',
      company: 'SIT Magical Hearts',
      period: 'Dec 2024 - Dec 2025',
      description: [
        'Scaled club human capital by 50% through recruitment strategies and improved engagement.',
        'Streamlined volunteer registration system for faster deployment at events.',
        'Delivered value to 300+ beneficiaries across multiple outreach programs.',
      ],
    },
    {
      title: 'Order Management Specialist',
      company: 'Infineon Technologies',
      period: 'Mar 2021 - Aug 2021',
      description: [
        'Built Python web scraping solution to automate semiconductor market news gathering.',
        'Used Selenium and Beautiful Soup for efficient data extraction.',
        'Optimized delivery note creation and operational report generation.',
      ],
    },
  ];

  return (
    <div className="max-w-full">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-2">
          Experience
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full"></div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-5 space-y-4">
        {/* Timeline Line */}
        <div className="absolute left-[0.45rem] top-1 bottom-1 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 group">
            {/* Timeline Node */}
            <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-accent z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(201,169,96,0.6)]"></div>

            {/* Content Card */}
            <div className="bg-secondary rounded-lg p-4 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-bold text-luxury-cream group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-neutral-300">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-1.5">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-neutral-300 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;