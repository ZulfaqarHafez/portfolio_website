const Certifications = () => {
  const certifications = [
    {
      title: 'Exploring Adversarial Machine Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      date: '2025',
      credentialId: 'jUodpjl8RCuEEd88fShWnw',
      icon: '☁️',
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      date: '2025',
      credentialId: '1tO0Ys3ITkGJkXM3sgBKrQ',
      icon: '🤖',
    },
    {
      title: 'Generative AI with Diffusion Models',
      issuer: 'NVIDIA Deep Learning Institute',
      date: '2025',
      credentialId: '6YSchyAvQGWRCf1CJoKOIw',
      icon: '📊',
    },
    {
      title: 'AI4I® – Literacy in AI',
      issuer: 'AI Singapore',
      date: '2024',
      credentialId: '8389DB4A34-7F0B5DAF21-14B039E00',
      icon: '🧠',
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      date: '2021',
      credentialId: '752f68fe8a73',
      icon: '⚡',
    },
    {
      title: 'Python (Basic) Certificate',
      issuer: 'HackerRank',
      date: '2021',
      credentialId: '3d1b66399d27',
      icon: '🗄️',
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-center text-white mb-5">
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-20 rounded-full"></div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-secondary p-8 rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:-translate-y-2 border-2 border-accent/30 hover:border-accent/50"
              >
                {/* Icon */}
                <div className="text-6xl mb-5">{cert.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{cert.title}</h3>
                <p className="text-accent font-semibold mb-3 text-lg">{cert.issuer}</p>
                <p className="text-base text-neutral-300 mb-4 font-medium">{cert.date}</p>

                {/* Credential ID */}
                <div className="pt-4 border-t-2 border-accent/30">
                  <p className="text-sm text-neutral-400 font-medium mb-1">Credential ID</p>
                  <p className="text-base font-mono text-white">{cert.credentialId}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
