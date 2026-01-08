const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) Applied Artificial Intelligence ',
      school: 'Singapore Institute of Technology',
      period: 'Sep 2024 - Sep 2027',
      achievements: [
        'President, SIT Magical Hearts (2025)',
        'Finalist & Top 100 in multiple Hackathons',
        'CIT Funded Project',
      ],
    },
    {
      degree: 'Diploma in Business Information Systems',
      school: 'Republic Polytechnic',
      period: 'April 2019 - April 2022',
      achievements: [
        'Top 20: Google for Startups Cloud Hackathon Singapore 2022.',
        'Focus on Web Development & Business Analytics.',
        'Capstone: Social Media platform for XIOHOO',
      ],
    },
  ];

  return (
    <div className="max-w-full">
      {/* Section Header - Compact */}
      <div className="text-center mb-8 md:mb-10">
        <div className="inline-block p-2 rounded-full bg-accent/10 text-xl mb-3 text-accent">
          📚
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-2 px-4">
          Education
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
      </div>

      {/* Modern Vertical Timeline - Compact */}
      <div className="relative pl-4 md:pl-8 space-y-8">
        {/* Continuous Line */}
        <div className="absolute left-[1.65rem] md:left-[2.65rem] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

        {education.map((edu, idx) => (
          <div key={idx} className="relative pl-10 md:pl-14 group card-entrance">
             {/* Timeline Node */}
             <div className="absolute left-[0.9rem] md:left-[1.65rem] top-6 w-4 h-4 rounded-full bg-luxury-cream border-[3px] border-accent z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(201,169,96,0.6)]"></div>

            {/* Content Card */}
            <div className="relative p-4 bg-secondary rounded-xl shadow-sm border border-accent/20 hover:shadow-luxury hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1">

              {/* Header: Degree & Date */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold font-serif text-luxury-cream group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-medium text-neutral-200 mt-1">
                    {edu.school}
                  </div>
                </div>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-luxury-cream text-accent border border-accent/20 shrink-0">
                  {edu.period}
                </span>
              </div>

              {/* Achievements List */}
              <ul className="mt-3 space-y-2">
                {edu.achievements.map((item, itemIdx) => (
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

export default Education;