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
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-2">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-accent"></div>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white p-5 border border-neutral-200 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base font-bold text-primary mb-3 pb-2 border-b border-neutral-200">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-luxury-cream text-primary text-xs font-medium border border-neutral-200 hover:border-accent hover:bg-white transition-all duration-200"
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
