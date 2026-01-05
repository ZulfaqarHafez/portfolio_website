import Experience from './Experience';
import Education from './Education';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
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
