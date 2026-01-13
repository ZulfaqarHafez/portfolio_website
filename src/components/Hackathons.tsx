const Hackathons = () => {
  const hackathons = [
    {
      title: 'Google for Startups Cloud Hackathon Singapore 2022',
      position: 'Top 20',
      date: 'May 2022',
      project: 'CareFall Vision',
      description:
        ' Computer Vision and Pose Estimation to detect seniors who fell down at home, alerting their caregiver for assistance.',
      award: '⭐',
    },
    {
      title: 'SMU Hack For Cities 2025',
      position: 'Finalist',
      date: 'February 2025',
      project: 'GreenMerlion',
      description:
        'A recycling web application that includes a computer vision for waste classification, chatbot, and gamification system.',
      award: '⭐',
    },
    {
      title: 'OGP Community Hackathon 2025',
      position: 'Sparks Community Innovation Fund',
      date: 'July 2025',
      project: 'Churp',
      description:
        'A web allotment garden booking system with Sparks Community Innovation Taskforce @ Tengah.',
      award: '🏆',
    },
    {
      title: 'SIT HackRift 2025',
      position: 'Finalist',
      date: 'December 2025',
      project: 'GuideMeSG',
      description:
        'Empowering Persons with Intellectual Disabilities to navigate Singapore\'s public transport independently with AR guidance, real-time alerts, and emergency support.',
      award: '⭐',
    },
  ];

  return (
    <section id="hackathons" className="section-padding bg-luxury-cream overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Title - Compact */}
          <div className="text-center mb-8 md:mb-12 relative px-4">
            {/* Background decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mb-3 relative inline-block z-10">
              Hackathons
              {/* Decorative Sparkle */}
              <span className="absolute -top-2 -right-5 text-xl sm:text-2xl animate-pulse text-accent filter drop-shadow-lg">✨</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-3"></div>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-4">
              Pushing boundaries and building innovative solutions in high-pressure environments.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative px-4 md:px-0">
            {/* Timeline Line - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
              {hackathons.map((hack, idx) => (
                <div key={idx} className="relative card-entrance group">
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-cream border-[3px] border-accent z-20 shadow-[0_0_15px_rgba(201,169,96,0.4)] transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(201,169,96,0.8)]"></div>

                  {/* Vertical Connector */}
                  <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-accent to-transparent"></div>

                  {/* Card */}
                  <div className="mt-0 lg:mt-[2.75rem] bg-secondary rounded-2xl p-4 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-2 border-accent/30 hover:border-accent/60 cursor-pointer">
                    {/* Award Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase border rounded-full text-accent border-accent/20 bg-luxury-cream shadow-sm">
                        {hack.date}
                      </span>
                      <div className="flex items-center justify-center w-10 h-10 text-2xl bg-luxury-cream rounded-full border border-accent/20 shadow-sm transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg group-hover:rotate-12 animate-float">
                        {hack.award}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold font-serif text-luxury-cream mb-1.5 leading-tight group-hover:text-accent transition-colors duration-300">
                      {hack.title}
                    </h3>

                    {/* Project Name */}
                    <h4 className="text-sm md:text-base font-semibold text-accent mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                      {hack.project}
                    </h4>

                    {/* Description */}
                    <p className="text-neutral-200 leading-relaxed text-xs sm:text-sm mb-3 group-hover:text-white transition-colors">
                      {hack.description}
                    </p>

                    {/* Position Badge */}
                    <div className="pt-3 border-t-2 border-accent/30">
                      <span className="text-xs font-bold text-luxury-cream inline-flex items-center gap-1.5 bg-accent/10 px-2.5 py-1 rounded-lg border border-accent/20">
                        <span className="text-accent">🏅</span> {hack.position}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
