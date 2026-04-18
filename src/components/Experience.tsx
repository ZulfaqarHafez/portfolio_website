import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
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
      <header className="mb-5">
        <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Professional Journey
        </p>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
          Experience
        </h2>
        <div className="section-divider"></div>
      </header>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="group tech-card tech-card-pad tech-card-hover standard-card-height transition-all duration-300 hover:-translate-y-1 tech-luxury-outline"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className={`card-title-readable text-base sm:text-lg font-bold transition-colors ${isDark ? 'text-luxury-cream group-hover:text-accent' : 'text-primary group-hover:text-accent'}`}>
                  {exp.title}
                </h3>
                <p className="text-sm card-subtle-readable card-text-readable">{exp.company}</p>
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border border-accent/25 bg-accent/10 accent-readable font-tech-mono card-chip-readable">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, itemIdx) => (
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

export default Experience;