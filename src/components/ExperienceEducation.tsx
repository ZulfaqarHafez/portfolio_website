import Experience from './Experience';
import Education from './Education';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceEducation = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`relative py-14 md:py-20 overflow-hidden transition-colors duration-300 ${isDark ? 'section-tone-dark-experience' : 'section-tone-light-experience'}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-12 right-10 w-56 h-56 rounded-full blur-3xl ${isDark ? 'bg-accent/8' : 'bg-accent/12'}`}></div>
        <div className={`absolute bottom-8 left-8 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-secondary/22' : 'bg-secondary/9'}`}></div>
        <div className={`absolute inset-0 tech-grid-soft ${isDark ? 'opacity-[0.05]' : 'opacity-[0.04]'}`}></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center mb-8 md:mb-10 scroll-fade-in">
          <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Trajectory
          </p>
          <h2 className={`section-title mb-3 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
            Experience and Education
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-start">
          <div className="scroll-fade-in-left group tech-card-panel tech-luxury-outline">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
              <div className="absolute inset-0 scan-sheen"></div>
            </div>
            <div className="relative z-10">
              <Experience />
            </div>
          </div>

          <div className="scroll-fade-in-right group tech-card-panel tech-luxury-outline">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
              <div className="absolute inset-0 scan-sheen"></div>
            </div>
            <div className="relative z-10">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
