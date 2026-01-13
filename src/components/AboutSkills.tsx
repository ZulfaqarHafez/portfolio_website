const AboutSkills = () => {
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
    <section id="about" className="py-12 md:py-16 bg-luxury-cream">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* About Row - Image + Text side by side */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start mb-10">
            
            {/* Image - Smaller, 1 column */}
            <div className="md:col-span-1">
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
                  <div className="p-3 bg-white rounded-lg border border-neutral-300 hover:border-accent transition-all duration-300">
                    <p className="text-xs text-neutral-600 mb-0.5 font-medium">📍 Location</p>
                    <p className="font-semibold text-primary text-sm">Singapore</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-300 hover:border-accent transition-all duration-300">
                    <p className="text-xs text-neutral-600 mb-0.5 font-medium">✉️ Email</p>
                    <p className="font-semibold text-primary text-xs break-words">zulfaqarhafez@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content - 2 columns */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-2">
                  About Me
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full"></div>
              </div>
              
              <div className="space-y-3 text-neutral-700 text-base leading-relaxed">
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
                <div className="p-3 bg-white rounded-lg border border-neutral-300">
                  <p className="text-xs text-neutral-600 mb-0.5 font-medium">📍 Location</p>
                  <p className="font-semibold text-primary text-sm">Singapore</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-300">
                  <p className="text-xs text-neutral-600 mb-0.5 font-medium">✉️ Email</p>
                  <p className="font-semibold text-primary text-xs break-words">zulfaqarhafez@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-2">
                Technical Skills
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="group bg-white p-4 rounded-lg border border-neutral-200 hover:border-accent/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-sm font-bold text-primary mb-2 pb-1.5 border-b border-neutral-200 group-hover:text-accent group-hover:border-accent/30 transition-colors duration-300 line-clamp-1">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs font-medium rounded border border-neutral-200 hover:border-accent hover:bg-accent/10 hover:text-primary transition-all duration-200 cursor-default"
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
