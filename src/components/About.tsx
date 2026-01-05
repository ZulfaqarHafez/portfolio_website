const About = () => {
  return (
    <section id="about" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Main profile image */}
                <div className="aspect-square bg-luxury-gradient rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-accent">
                  <div className="text-accent text-8xl font-bold opacity-90">ZH</div>
                  {/* Overlay text for image replacement */}
                  <div className="absolute bottom-4 left-4 right-4 bg-luxury-charcoal/90 backdrop-blur-sm p-3 rounded-lg border border-accent/30">
                    <p className="text-xs text-accent text-center">Replace with your photo</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-semibold font-serif text-primary mb-8">
                Hello! I'm Zulfaqar Hafez
              </h3>
              <div className="space-y-5 text-neutral-700 text-lg leading-relaxed">
                <p>
                  I'm a passionate <span className="font-semibold text-accent">Data Analyst & AI Engineer</span> with
                  a strong foundation in extracting insights from complex datasets and building intelligent solutions.
                </p>
                <p>
                  My journey in data science has equipped me with expertise in machine learning,
                  statistical analysis, and data visualization, enabling me to transform raw data
                  into actionable business intelligence.
                </p>
                <p>
                  I thrive on solving challenging problems and continuously expand my knowledge in
                  emerging AI technologies. When I'm not analyzing data, you can find me exploring
                  the latest developments in ML and contributing to data science communities.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="p-5 bg-white rounded-xl border-2 border-neutral-300 hover:border-accent hover:shadow-luxury transition-all duration-300">
                  <p className="text-sm text-neutral-600 mb-2 font-medium">📍 Location</p>
                  <p className="font-semibold text-primary text-base">Your City</p>
                </div>
                <div className="p-5 bg-white rounded-xl border-2 border-neutral-300 hover:border-accent hover:shadow-luxury transition-all duration-300">
                  <p className="text-sm text-neutral-600 mb-2 font-medium">✉️ Email</p>
                  <p className="font-semibold text-primary text-base">your@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
