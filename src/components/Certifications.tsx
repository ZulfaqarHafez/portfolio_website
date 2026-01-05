const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Data Analytics',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DA-123456',
      icon: '☁️',
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2023',
      credentialId: 'TF-789012',
      icon: '🤖',
    },
    {
      title: 'Microsoft Certified: Azure Data Scientist',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'MS-345678',
      icon: '📊',
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2022',
      credentialId: 'DL-901234',
      icon: '🧠',
    },
    {
      title: 'Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2021',
      credentialId: 'GCP-567890',
      icon: '⚡',
    },
    {
      title: 'Advanced SQL for Data Science',
      issuer: 'DataCamp',
      date: '2021',
      credentialId: 'DC-234567',
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
