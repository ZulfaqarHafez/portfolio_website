import { useTheme } from '../contexts/ThemeContext';

const AboutSkills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillGroups = [
    {
      category: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'NLP', 'Computer Vision', 'Deep Learning', 'LLMs', 'Scikit-learn']
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Data Engineering',
      skills: ['PySpark', 'Pandas', 'NumPy', 'ETL', 'Data Warehousing', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Tailwind CSS']
    },
    {
      category: 'Data Visualization',
      skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js']
    }
  ];

  const cardSpans = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

  return (
    <section id="about" className={`relative py-14 md:py-20 transition-colors duration-300 ${isDark ? 'section-tone-dark-about' : 'section-tone-light-about'}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-12 left-8 w-56 h-56 rounded-full blur-3xl ${isDark ? 'bg-accent/8' : 'bg-accent/12'}`}></div>
        <div className={`absolute bottom-12 right-8 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-secondary/24' : 'bg-secondary/12'}`}></div>
        <div className={`absolute inset-0 tech-grid-soft ${isDark ? 'opacity-[0.05]' : 'opacity-[0.04]'}`}></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start mb-12">
            <div className="scroll-fade-in-left">
              <div className="grid grid-cols-2 gap-3 max-w-[360px] mx-auto lg:mx-0">
                <div className={`tech-card tech-card-pad col-span-2 ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  <p className="section-kicker accent-readable mb-1">Currently at</p>
                  <p className="text-sm font-bold leading-snug">Singapore Institute of Technology</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>BSc (Hons) Applied Artificial Intelligence</p>
                </div>
                <div className={`tech-card tech-card-pad ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  <p className="text-3xl font-bold accent-readable">4+</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Live Projects</p>
                </div>
                <div className={`tech-card tech-card-pad ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  <p className="text-3xl font-bold accent-readable">4</p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Hackathons</p>
                </div>
                <div className={`tech-card tech-card-pad ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  <p className="section-kicker accent-readable mb-1">Role</p>
                  <p className="text-sm font-semibold">AI Engineer</p>
                </div>
                <div className={`tech-card tech-card-pad ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  <p className="section-kicker accent-readable mb-1">Approach</p>
                  <p className="text-sm font-semibold">Community First</p>
                </div>
              </div>
            </div>

            <div className="scroll-fade-in-right">
              <p className={`section-kicker mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                About
              </p>
              <h2 className={`section-title mb-4 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                About Me
              </h2>
              <div className="section-divider mb-6"></div>
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <p>
                  I'm a passionate <span className="font-semibold accent-readable">AI Engineer & Community Innovator</span> dedicated
                  to bridging the gap between complex technology and social impact.
                </p>
                <p>
                  My academic journey at the Singapore Institute of Technology (SIT) has provided me with a rigorous
                  foundation in Machine Learning, Deep Learning and SWE skillsets. However, I believe theory is best learned
                  through action. I actively implement these advanced concepts into tangible projects, transforming
                  classroom knowledge into intelligent solutions.
                </p>
                <p>
                  Beyond just code, I strive to use these technical skills to innovate for the community. Whether
                  it's building apps for accessibility or optimizing processes for non-profits, I am driven
                  to solve real community problems through technology.
                </p>
              </div>
            </div>
          </div>

          <div id="skills" className="scroll-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Skill Atlas
                </p>
                <h2 className={`section-title ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                  Technical Skills
                </h2>
              </div>
              <div className="flex items-center gap-3 sm:ml-auto">
                <div className="section-divider"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-6 gap-4 stagger-children">
              {skillGroups.map((group, index) => (
                <article
                  key={group.category}
                  className={`tech-card tech-card-pad tech-card-hover standard-card-height h-full transition-all duration-300 hover:-translate-y-1 tech-luxury-outline ${cardSpans[index]}`}
                >
                  <h3 className={`card-title-readable text-sm sm:text-base font-bold mb-3 pb-2 border-b ${isDark ? 'text-luxury-cream border-accent/30' : 'text-primary border-neutral-200'} transition-colors`}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs rounded-full border card-chip-readable transition-all duration-200 ${
                          isDark
                            ? 'bg-primary/70 text-neutral-300 border-accent/20 hover:bg-accent/20 hover:border-accent'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-accent/10 hover:border-accent/50'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
