const Skills = () => {
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
      skills: ['PySpark', 'Pandas', 'NumPy', 'ETL', 'Data Warehousing', 'Data Modeling', 'PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      category: 'Data Visualization',
      skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js']
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-16 bg-luxury-cream">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-3">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="group bg-white p-4 md:p-5 rounded-lg border border-neutral-200 hover:border-accent/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-sm md:text-base font-bold text-primary mb-3 pb-2 border-b border-neutral-200 group-hover:text-accent group-hover:border-accent/30 transition-colors duration-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-neutral-50 text-neutral-700 text-[11px] md:text-xs font-medium rounded-full border border-neutral-200 hover:border-accent hover:bg-accent/10 hover:text-primary transition-all duration-200 cursor-default"
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
    </section>
  );
};

export default Skills;
