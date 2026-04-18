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
      <header className="mb-5">
        <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Academic Foundation
        </p>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
          Education
        </h2>
        <div className="section-divider"></div>
      </header>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <article
            key={idx}
            className="group tech-card tech-card-pad tech-card-hover standard-card-height transition-all duration-300 hover:-translate-y-1 tech-luxury-outline"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className={`card-title-readable text-base sm:text-lg font-bold leading-tight transition-colors ${isDark ? 'text-luxury-cream group-hover:text-accent' : 'text-primary group-hover:text-accent'}`}>
                  {edu.degree}
                </h3>
                <p className="text-sm card-subtle-readable card-text-readable">{edu.school}</p>
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border border-accent/25 bg-accent/10 accent-readable font-tech-mono card-chip-readable">
                {edu.period}
              </span>
            </div>

            <ul className="space-y-2">
              {edu.achievements.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-sm card-text-readable card-muted-readable">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;