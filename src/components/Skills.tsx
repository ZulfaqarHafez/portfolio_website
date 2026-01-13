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
    <section id="skills" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-3">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"></div>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-base font-bold text-primary mb-4 pb-3 border-b border-neutral-200 group-hover:text-accent group-hover:border-accent/30 transition-colors duration-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-50 text-neutral-700 text-xs font-medium rounded-full border border-neutral-200 hover:border-accent hover:bg-accent/10 hover:text-primary transition-all duration-200 cursor-default"
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
