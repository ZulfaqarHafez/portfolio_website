import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ml');

  const skillCategories = [
    {
      id: 'ml',
      title: 'Machine Learning & AI',
      icon: '🤖',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'NLP', 'Computer Vision', 'Deep Learning', 'LLMs', 'Scikit-learn'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: '💻',
      skills: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript', 'PySpark', 'Pandas', 'NumPy'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'data',
      title: 'Data & Databases',
      icon: '📊',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB','Data Warehousing', 'ETL', 'Data Modeling'],
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: '🌐',
      skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Tailwind CSS', 'Express.js'],
      color: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      id: 'viz',
      title: 'Visualization',
      icon: '📈',
      skills: ['Tableau',, 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
      color: 'from-yellow-500/20 to-amber-500/20',
    },
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 relative px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary mb-5 relative inline-block">
              Skills & Technologies
              <span className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 text-2xl sm:text-3xl md:text-4xl animate-pulse text-accent filter drop-shadow-lg">⚡</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Technical expertise across AI, machine learning, and full-stack development.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="mb-10 px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-luxury-cream shadow-lg scale-105'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:scale-105 border-2 border-neutral-200'
                  }`}
                >
                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-accent animate-pulse"></div>
                  )}

                  <div className="relative flex items-center gap-2">
                    <span className="text-xl transition-transform group-hover:scale-125 group-hover:rotate-12">
                      {category.icon}
                    </span>
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="sm:hidden">{category.icon}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display Area - Animated */}
          <div className="px-4">
            <div className={`relative bg-gradient-to-br ${activeSkills?.color} rounded-3xl p-8 md:p-12 shadow-luxury border-2 border-accent/20 transition-all duration-500 animate-fade-in`}>
              {/* Category Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-5xl animate-float">{activeSkills?.icon}</span>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                    {activeSkills?.title}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {activeSkills?.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="group px-5 py-3 bg-white text-primary rounded-xl text-base md:text-lg font-semibold hover:bg-gold-gradient hover:text-primary transition-all duration-300 cursor-default border-2 border-accent/30 hover:border-accent hover:scale-110 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="text-center mt-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border-2 border-primary/20">
                  <span className="text-accent">✨</span>
                  {activeSkills?.skills.length} Technologies
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4">
            <div className="bg-white p-4 rounded-xl border-2 border-neutral-200 text-center hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-xs md:text-sm text-neutral-600">Total Skills</div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-neutral-200 text-center hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-xs md:text-sm text-neutral-600">Categories</div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-neutral-200 text-center hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">3+</div>
              <div className="text-xs md:text-sm text-neutral-600">Years Exp</div>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-neutral-200 text-center hover:border-accent hover:shadow-lg transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-xs md:text-sm text-neutral-600">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
