const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Analysis',
      skills: ['Python', 'R', 'SQL', 'PySpark', 'Pandas', 'NumPy', 'Scikit-learn'],
    },
    {
      title: 'Machine Learning & AI',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'NLP', 'Computer Vision', 'Deep Learning', 'LLMs'],
    },
    {
      title: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
    },
    {
      title: 'Big Data & Cloud',
      skills: ['Apache Spark', 'Hadoop', 'AWS', 'Azure', 'Google Cloud', 'Databricks'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Snowflake', 'BigQuery'],
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'Docker', 'Jupyter', 'Airflow', 'MLflow', 'FastAPI', 'Flask'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-center text-white mb-5">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-20 rounded-full"></div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-secondary p-8 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:-translate-y-2 border-2 border-accent/30 hover:border-accent/50"
              >
                <h3 className="text-2xl font-bold text-accent mb-6 text-center border-b-2 border-accent/40 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2.5 bg-luxury-charcoal text-white rounded-lg text-base font-medium hover:bg-gold-gradient hover:text-primary transition-all duration-300 cursor-default border border-accent/30 hover:scale-105 hover:shadow-lg"
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
