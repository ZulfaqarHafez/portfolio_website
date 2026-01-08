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
      {/* Section Header - Compact */}
      <div className="text-center mb-8 md:mb-10">
        <div className="inline-block p-2 rounded-full bg-accent/10 text-xl mb-3 text-accent">
          💼
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-2 px-4">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
      </div>

      {/* Modern Vertical Timeline - Compact */}
      <div className="relative pl-4 md:pl-8 space-y-8">
        {/* Continuous Line */}
        <div className="absolute left-[1.65rem] md:left-[2.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 md:pl-14 group card-entrance">
            {/* Timeline Node */}
            <div className="absolute left-[0.9rem] md:left-[1.65rem] top-6 w-4 h-4 rounded-full bg-luxury-cream border-[3px] border-accent z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(201,169,96,0.6)]"></div>

            {/* Content Card */}
            <div className="relative p-4 bg-secondary rounded-xl shadow-sm border border-accent/20 hover:shadow-luxury hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1">

              {/* Header: Role & Date */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold font-serif text-luxury-cream group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="text-base font-medium text-neutral-200 mt-1">
                    {exp.company}
                  </div>
                </div>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-luxury-cream text-accent border border-accent/20 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description List */}
              <ul className="mt-3 space-y-2">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-neutral-200 leading-relaxed text-sm group-hover:text-white transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
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