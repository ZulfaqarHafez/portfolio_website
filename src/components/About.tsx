const About = () => {
  return (
    <section id="about" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 md:mb-16"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Main profile image */}
                <div className="aspect-square bg-luxury-gradient rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border-4 border-accent">
                  <img 
                    src={"/images/formal.png"}
                    alt="Zulfaqar Hafez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-primary mb-6 md:mb-8">
                Hello! I'm Zulfaqar Hafez
              </h3>
              <div className="space-y-4 md:space-y-5 text-neutral-700 text-base sm:text-lg leading-relaxed">
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
                  to solve real community problems through technology.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 bg-white rounded-xl border-2 border-neutral-300 hover:border-accent hover:shadow-luxury transition-all duration-300">
                  <p className="text-sm text-neutral-600 mb-2 font-medium">📍 Location</p>
                  <p className="font-semibold text-primary text-base">Singapore</p>
                </div>
                <div className="p-5 bg-white rounded-xl border-2 border-neutral-300 hover:border-accent hover:shadow-luxury transition-all duration-300">
                  <p className="text-sm text-neutral-600 mb-2 font-medium">✉️ Email</p>
                  <p className="font-semibold text-primary text-sm sm:text-base break-words">zulfaqarhafez@gmail.com</p>
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
