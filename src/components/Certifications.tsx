import { useState } from 'react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const certifications = [
    {
      title: 'Exploring Adversarial Machine Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      category: 'nvidia',
      date: '2025',
      credentialId: 'jUodpjl8RCuEEd88fShWnw',
      icon: '☁️',
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      category: 'nvidia',
      date: '2025',
      credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
      icon: '🤖',
    },
    {
      title: 'Generative AI with Diffusion Models',
      issuer: 'NVIDIA Deep Learning Institute',
      category: 'nvidia',
      date: '2025',
      credentialId: '6YSchyAvQGWRCf1CJoKOIw',
      icon: '📊',
    },
    {
      title: 'AI4I® – Literacy in AI',
      issuer: 'AI Singapore',
      category: 'ai-singapore',
      date: '2024',
      credentialId: '8389DB4A34-7F0B5DAF21-14B039E00',
      icon: '🧠',
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      category: 'hackerrank',
      date: '2021',
      credentialId: '752f68fe8a73',
      icon: '⚡',
    },
    {
      title: 'Python (Basic) Certificate',
      issuer: 'HackerRank',
      category: 'hackerrank',
      date: '2021',
      credentialId: '3d1b66399d27',
      icon: '🗄️',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All', icon: '🎯', count: certifications.length },
    { id: 'nvidia', label: 'NVIDIA', icon: '💚', count: certifications.filter(c => c.category === 'nvidia').length },
    { id: 'ai-singapore', label: 'AI Singapore', icon: '🇸🇬', count: certifications.filter(c => c.category === 'ai-singapore').length },
    { id: 'hackerrank', label: 'HackerRank', icon: '💻', count: certifications.filter(c => c.category === 'hackerrank').length },
  ];

  const filteredCertifications = activeTab === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeTab);

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16 relative px-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary mb-5 relative inline-block">
              Certifications
              <span className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 text-2xl sm:text-3xl md:text-4xl animate-pulse text-accent">🏆</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Professional certifications and achievements in AI, machine learning, and software development.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-10 px-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-luxury-cream shadow-lg scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                  }`}
                >
                  {/* Active Tab Indicator */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-accent animate-pulse"></div>
                  )}

                  <div className="relative flex items-center gap-2">
                    <span className="text-xl transition-transform group-hover:scale-125 group-hover:rotate-12">
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === tab.id
                        ? 'bg-accent text-primary'
                        : 'bg-neutral-300 text-neutral-700'
                    }`}>
                      {tab.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Grid with Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filteredCertifications.map((cert, idx) => (
              <div
                key={`${cert.credentialId}-${idx}`}
                className="bg-primary p-8 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:rotate-1 border-2 border-accent/30 hover:border-accent/60 group cursor-pointer animate-fade-in"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Icon */}
                <div className="text-6xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{cert.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-luxury-cream mb-3 leading-tight group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-accent font-semibold mb-3 text-lg">{cert.issuer}</p>
                <p className="text-base text-neutral-200 mb-4 font-medium flex items-center gap-2">
                  <span className="text-accent">📅</span>
                  {cert.date}
                </p>

                {/* Credential ID */}
                <div className="pt-4 border-t-2 border-accent/30">
                  <p className="text-sm text-neutral-300 font-medium mb-1">Credential ID</p>
                  <p className="text-base font-mono text-luxury-cream break-all">{cert.credentialId}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No certifications found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
