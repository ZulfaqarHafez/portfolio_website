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

  return (
    <section id="about" className={`py-12 md:py-16 transition-colors duration-300 ${isDark ? 'bg-primary' : 'bg-luxury-cream'}`}>
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* About Row - Image + Text side by side */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start mb-10 scroll-fade-in">
            
            {/* Image - Smaller, 1 column */}
            <div className="md:col-span-1 scroll-fade-in-left">
              <div className="relative group max-w-[200px] mx-auto md:mx-0">
                <div className="aspect-square bg-luxury-gradient rounded-xl shadow-lg flex items-center justify-center overflow-hidden border-2 border-accent transition-all duration-300 hover:scale-105">
                  <img
                    src="/images/formal.png"
                    alt="Zulfaqar Hafez"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Quick Facts under image on desktop */}
                <div className="hidden md:block mt-4 space-y-2">
                  <div className={`p-3 rounded-lg border transition-all duration-300 ${isDark ? 'bg-secondary border-accent/30 hover:border-accent' : 'bg-white border-neutral-300 hover:border-accent'}`}>
                    <p className={`text-xs mb-0.5 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>📍 Location</p>
                    <p className={`font-semibold text-sm ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>Singapore</p>
                  </div>
                  <div className={`p-3 rounded-lg border transition-all duration-300 ${isDark ? 'bg-secondary border-accent/30 hover:border-accent' : 'bg-white border-neutral-300 hover:border-accent'}`}>
                    <p className={`text-xs mb-0.5 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>✉️ Email</p>
                    <p className={`font-semibold text-xs break-words ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>zulfaqarhafez@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content - 2 columns */}
            <div className="md:col-span-2 scroll-fade-in-right">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold font-serif mb-2 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                  About Me
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>
              
              <div className={`space-y-3 text-base leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <p>
                  I'm a passionate <span className="font-semibold text-accent">AI Engineer & Community Innovator</span> dedicated 
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

              {/* Quick Facts - Mobile only */}
              <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
                <div className={`p-3 rounded-lg border ${isDark ? 'bg-secondary border-accent/30' : 'bg-white border-neutral-300'}`}>
                  <p className={`text-xs mb-0.5 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>📍 Location</p>
                  <p className={`font-semibold text-sm ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>Singapore</p>
                </div>
                <div className={`p-3 rounded-lg border ${isDark ? 'bg-secondary border-accent/30' : 'bg-white border-neutral-300'}`}>
                  <p className={`text-xs mb-0.5 font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>✉️ Email</p>
                  <p className={`font-semibold text-xs break-words ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>zulfaqarhafez@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="scroll-fade-in">
            <div className="mb-5">
              <h2 className={`text-2xl sm:text-3xl font-bold font-serif mb-2 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
                Technical Skills
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 stagger-children">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className={`group p-4 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${isDark ? 'bg-secondary border-accent/30 hover:border-accent/50' : 'bg-white border-neutral-200 hover:border-accent/50'}`}
                >
                  <h3 className={`text-sm font-bold mb-2 pb-1.5 border-b transition-colors duration-300 line-clamp-1 ${isDark ? 'text-luxury-cream border-accent/30 group-hover:text-accent group-hover:border-accent/50' : 'text-primary border-neutral-200 group-hover:text-accent group-hover:border-accent/30'}`}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs font-medium rounded border transition-all duration-200 cursor-default ${isDark ? 'bg-luxury-charcoal text-neutral-300 border-accent/20 hover:border-accent hover:bg-accent/20 hover:text-luxury-cream' : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-accent hover:bg-accent/10 hover:text-primary'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
