const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-luxury-cream">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-10 relative">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-3 relative inline-block">
              About Me
              <span className="absolute -top-2 -right-5 text-lg sm:text-xl animate-pulse text-accent">👨‍💻</span>
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative group max-w-xs sm:max-w-sm mx-auto">
                <div className="aspect-square bg-luxury-gradient rounded-xl shadow-lg flex items-center justify-center overflow-hidden border-2 border-accent transition-all duration-300 hover:scale-105">
                  <img
                    src="/images/formal.png"
                    alt="Zulfaqar Hafez"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-lg sm:text-xl font-semibold font-serif text-primary mb-3">
                Hello! I'm Zulfaqar Hafez
              </h3>
              <div className="space-y-2 text-neutral-700 text-sm leading-relaxed">
                <p>
                  I'm a passionate <span className="font-semibold text-accent">AI Engineer & Community Innovator</span>  dedicated 
                  to bridging the gap between complex technology and social impact.
                </p>
                <p>
                  My academic journey at the Singapore Institute of Technology (SIT) has provided me with a rigorous
                  foundation in Machine Learning,Deep Learning and SWE skillsets. However, I believe theory is best learned
                  through action. I actively implement these advanced concepts into tangible projects, transforming 
                  classroom knowledge into intelligent solutions.
                </p>
                <p>
                  Beyond just code, I strive to use these technical skills to innovate for the community. Whether 
                  it's building apps for accessibility or optimizing processes for non-profits, I am driven 
                  to solve real community problems through technology. I believe I could do anything through grit and perseverance.
                </p>
              </div>

              {/* Quick Facts - Compact */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-lg border border-neutral-300 hover:border-accent transition-all duration-300">
                  <p className="text-xs text-neutral-600 mb-1 font-medium">📍 Location</p>
                  <p className="font-semibold text-primary text-sm">Singapore</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-300 hover:border-accent transition-all duration-300">
                  <p className="text-xs text-neutral-600 mb-1 font-medium">✉️ Email</p>
                  <p className="font-semibold text-primary text-xs sm:text-sm break-words">zulfaqarhafez@gmail.com</p>
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
