const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-luxury-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image - Small circular */}
          <div className="mb-10 mt-8 md:mt-12 animate-scale-in animate-once">
            {/* Added 'overflow-hidden' to clip the image to the circle */}
            <div className="w-48 h-48 mx-auto bg-gold-gradient rounded-full flex items-center justify-center shadow-luxury-lg border-4 border-accent hover:scale-110 transition-all duration-500 overflow-hidden animate-pulse-glow">
              <img
                src="/images/zul.jpg"
                alt="Zulfaqar Hafez"
                className="w-full h-full object-cover hover:rotate-6 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-4 animate-fade-in-down animate-delay-200 animate-once font-light">
            Hi there! I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-6 animate-fade-in-up animate-delay-300 animate-once tracking-tight px-4">
            Zulfaqar Hafez
          </h1>

          {/* Title/Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-8 md:mb-10 animate-fade-in-up animate-delay-400 animate-once px-4">
            AI Engineer & Community Innovator
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 mb-12 md:mb-14 max-w-3xl mx-auto animate-fade-in-up animate-delay-500 animate-once leading-relaxed font-light px-6">
            Passionate about leveraging AI and machine learning to solve real-world problems.
            Transforming community problems into tech solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center animate-fade-in-up animate-delay-600 animate-once px-6">
            <a
              href="#projects"
              className="group px-8 md:px-10 py-4 md:py-5 bg-gold-gradient text-primary rounded-xl font-bold text-base md:text-lg hover:shadow-luxury-lg transition-all duration-300 shadow-luxury transform hover:-translate-y-2 hover:scale-110 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#about"
              className="group px-8 md:px-10 py-4 md:py-5 bg-transparent text-white border-2 border-accent rounded-xl font-bold text-base md:text-lg hover:bg-accent hover:text-primary transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-2 hover:scale-110"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
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
