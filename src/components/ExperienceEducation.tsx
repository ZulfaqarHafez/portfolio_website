import Experience from './Experience';
import Education from './Education';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceEducation = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-12 md:py-16 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-secondary' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Experience */}
          <div className="scroll-fade-in-left">
            <Experience />
          </div>

          {/* Education */}
          <div className="scroll-fade-in-right">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
