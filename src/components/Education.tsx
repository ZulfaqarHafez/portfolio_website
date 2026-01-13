import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const education = [
    {
      degree: 'BSc (Hons) Applied Artificial Intelligence',
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
        'Top 20: Google Cloud Hackathon Singapore 2022',
        'Focus on Web Development & Business Analytics',
        'Capstone: Social Media platform for XIOHOO',
      ],
    },
  ];

  return (
    <div className="max-w-full">
      {/* Section Header */}
      <div className="mb-5">
        <h2 className={`text-2xl sm:text-3xl font-bold font-serif mb-2 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
          Education
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full"></div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-5 space-y-4">
        {/* Timeline Line */}
        <div className="absolute left-[0.45rem] top-1 bottom-1 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent"></div>

        {education.map((edu, idx) => (
          <div key={idx} className="relative pl-6 group">
            {/* Timeline Node */}
            <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-accent z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(201,169,96,0.6)]"></div>

            {/* Content Card */}
            <div className="bg-secondary rounded-lg p-4 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-bold text-luxury-cream group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-neutral-300">{edu.school}</p>
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20 shrink-0">
                  {edu.period}
                </span>
              </div>

              {/* Achievements */}
              <ul className="space-y-1.5">
                {edu.achievements.map((item, itemIdx) => (
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

export default Education;