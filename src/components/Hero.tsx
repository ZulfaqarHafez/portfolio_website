const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-luxury-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image - Small circular */}
          <div className="mb-10 animate-fade-in">
            <div className="w-36 h-36 mx-auto bg-gold-gradient rounded-full flex items-center justify-center shadow-luxury-lg border-4 border-accent hover:scale-105 transition-transform duration-300">
              <span className="text-primary text-5xl font-bold">ZH</span>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-4 animate-fade-in font-light">
            Hi there! I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-6 animate-fade-in-up tracking-tight">
            Zulfaqar Hafez
          </h1>

          {/* Title/Role */}
          <h2 className="text-3xl md:text-5xl font-semibold text-accent mb-10 animate-fade-in-up">
            Data Analyst & AI Engineer
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-neutral-200 mb-14 max-w-3xl mx-auto animate-fade-in-up leading-relaxed font-light">
            Transforming data into actionable insights and building intelligent solutions.
            Passionate about leveraging AI and machine learning to solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up">
            <a
              href="#projects"
              className="px-10 py-4 bg-gold-gradient text-primary rounded-xl font-semibold text-lg hover:shadow-luxury-lg transition-all duration-300 shadow-luxury transform hover:-translate-y-1 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#about"
              className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1 hover:scale-105"
            >
              Learn More
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
