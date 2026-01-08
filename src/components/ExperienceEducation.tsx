import Experience from './Experience';
import Education from './Education';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Experience */}
          <div>
            <Experience />
          </div>

          {/* Education */}
          <div>
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
