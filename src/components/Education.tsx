const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      school: 'University Name',
      period: '2020 - 2022',
      logo: '🎓',
      achievements: [
        'GPA: 3.9/4.0',
        'Focus: Machine Learning & AI',
        'Thesis: Advanced ML Techniques for Predictive Analytics',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      period: '2016 - 2020',
      logo: '📚',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List: All Semesters',
        'Capstone: Data Analytics Platform',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-bold font-serif text-center text-primary mb-5">
        Education
      </h2>
      <div className="w-24 h-1.5 bg-accent mx-auto mb-20 rounded-full"></div>

      {/* Tree Structure */}
      <div className="relative">
        {/* Vertical trunk line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-accent/30"></div>

        {/* Education Items */}
        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-20 md:pl-28">
              {/* Branch node */}
              <div className="absolute left-8 md:left-12 top-6 w-8 md:w-12 h-0.5 bg-accent/30"></div>

              {/* Circle node with logo */}
              <div className="absolute left-4 md:left-6 top-2 w-16 h-16 bg-white border-4 border-accent rounded-full flex items-center justify-center shadow-lg text-2xl">
                {edu.logo}
              </div>

              {/* Content Card */}
              <div className="bg-white p-8 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border-2 border-accent/20 hover:border-accent/40">
                <div className="mb-4">
                  <span className="inline-block px-5 py-2 bg-gold-gradient text-primary text-base font-bold rounded-full shadow-sm">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-3xl font-bold font-serif text-primary mb-3">{edu.degree}</h3>
                <p className="text-xl text-accent font-semibold mb-5">{edu.school}</p>
                <ul className="space-y-3 text-neutral-700 text-base">
                  {edu.achievements.map((item, itemIdx) => (
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

export default Education;
