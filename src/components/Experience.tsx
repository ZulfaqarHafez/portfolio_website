const Experience = () => {
  const experiences = [
    {
      title: 'Product Manager (Citizen Developer)',
      company: 'People\'s Association',
      period: 'Sept 2025 - Present',
      description: [
        'Primary liaison between the technical team and the People\'s Association, translating community requirements into technical specifications for the allotment garden solution.',
        'Led the product roadmap for the community garden initiative, prioritizing features that directly addressed the needs of local residents and garden volunteers.',
        'Conducted on-ground requirements gathering with community members to ensure the final product effectively supported the allotment garden\'s operations and sustainability goals.',
      ],
    },
    {
      title: 'President',
      company: 'SIT Magical Hearts',
      period: 'Dec 2024 - Dec 2025',
      description: [
        'BScaled club human capital by 50% through recruitment strategies and improved member engagement',
        'Identified inefficiencies in volunteer management and streamlined the registration system, resulting in faster deployment of volunteers for events.',
        'Directed resources to maximize community reach, successfully delivering value to 300+ beneficiaries across multiple outreach programs.',
      ],
    },
    {
      title: 'Order Management Specialist',
      company: 'Infineon Technologies',
      period: 'Mar 2021 - Aug 2021',
      description: [
        'Developed a Python-based web scraping solution to automate the gathering of market news in the semiconductor industry.',
        'Used Python Selenium and Beautiful Soup for efficient data extraction, reducing manual effort and increasing information accuracy.',
        'Collaborated with Customer Logistics Managers to optimize delivery note creation and operational report generation.',
      ],
    },
  ];

  return (
    <div className="max-w-full">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block p-3 rounded-full bg-accent/10 text-2xl sm:text-3xl mb-4 text-accent">
          💼
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white mb-3 px-4">
          Experience
        </h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
      </div>

      {/* Modern Vertical Timeline */}
      <div className="relative pl-4 md:pl-8 space-y-12">
        {/* Continuous Line */}
        <div className="absolute left-[1.65rem] md:left-[2.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 md:pl-14 group">
            {/* Timeline Node */}
            <div className="absolute left-[0.9rem] md:left-[1.65rem] top-6 w-4 h-4 rounded-full bg-luxury-cream border-[3px] border-accent z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(201,169,96,0.6)]"></div>

            {/* Content Card */}
            <div className="relative p-6 bg-secondary rounded-xl shadow-sm border border-accent/20 hover:shadow-luxury hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1">

              {/* Header: Role & Date */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-luxury-cream group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="text-lg font-medium text-neutral-200 mt-1">
                    {exp.company}
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-luxury-cream text-accent border border-accent/20 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description List */}
              <ul className="mt-4 space-y-3">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-neutral-200 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
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