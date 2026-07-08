const experiences = [
  {
    title: 'Applied AI Engineer (Computer Vision)',
    company: 'Louis Dreyfus Company · Internship',
    period: 'Mar 2026 — Present',
    current: true,
    description: [
      'Building computer vision systems for agricultural commodity operations at one of the world’s largest agri-merchants.',
      'Taking models from prototype to production against real-world, messy, physical-world imagery.',
      'The closest an AI engineer gets to farming without leaving the terminal.',
    ],
  },
  {
    title: 'Product Lead (Citizen Developer)',
    company: 'People’s Association · Seasonal',
    period: 'Sep 2025 — Present',
    current: true,
    description: [
      'Primary liaison between the technical team and PA, translating community requirements into technical specs.',
      'Led the product roadmap for the Tengah community garden initiative, prioritizing features for residents.',
      'Conducted on-ground requirements gathering to support allotment garden operations.',
    ],
  },
  {
    title: 'President',
    company: 'SIT Magical Hearts',
    period: 'Dec 2024 — Dec 2025',
    current: false,
    description: [
      'Scaled club membership by 50% through recruitment strategy and better engagement.',
      'Streamlined the volunteer registration system for faster deployment at events.',
      'Delivered value to 300+ beneficiaries across multiple outreach programs.',
    ],
  },
  {
    title: 'Order Management Specialist',
    company: 'Infineon Technologies · Internship',
    period: 'Mar 2021 — Aug 2021',
    current: false,
    description: [
      'Built a Python web-scraping pipeline (Selenium, Beautiful Soup) to automate semiconductor market-news gathering.',
      'Optimized delivery-note creation and operational report generation.',
    ],
  },
];

const education = [
  {
    degree: 'BSc (Hons) Applied Artificial Intelligence',
    school: 'Singapore Institute of Technology',
    period: '2024 — 2027',
    notes: ['President, SIT Magical Hearts', 'Five hackathon finals while enrolled', 'CIT-funded project (Churp)'],
  },
  {
    degree: 'Diploma in Business Information Systems',
    school: 'Republic Polytechnic',
    period: '2019 — 2022',
    notes: ['Top 20, Google Cloud Hackathon SG 2022', 'Focus: web development & business analytics'],
  },
];

const certifications = [
  { name: 'Generative AI with Diffusion Models', issuer: 'NVIDIA Deep Learning Institute', year: '2025' },
  { name: 'Exploring Adversarial Machine Learning', issuer: 'NVIDIA Deep Learning Institute', year: '2025' },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA Deep Learning Institute', year: '2025' },
  { name: 'AI4I — Literacy in AI', issuer: 'AI Singapore', year: '2024' },
  { name: 'Python & Problem Solving', issuer: 'HackerRank', year: '2021' },
  { name: 'Advanced Google Analytics', issuer: 'Google', year: '2021' },
];

const ExperienceEducation = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 border-t b-line">
      <div className="container-custom px-4 sm:px-6">
        <div className="scroll-fade-in flex items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="annot t-accent mb-2">Fig. 6 · Prosecution history</p>
            <h2 className="font-display t-ink text-4xl sm:text-5xl">Record of Service</h2>
          </div>
          <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-3"></div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
          {/* Experience timeline */}
          <div className="scroll-fade-in-left">
            <p className="annot t-faint mb-5">Experience</p>
            <div className="relative border-l b-strong ml-1.5 space-y-8 pb-1">
              {experiences.map((exp) => (
                <article key={exp.title} className="relative pl-7">
                  <span
                    className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rotate-45 border ${
                      exp.current ? 'bg-accent-solid b-accent' : 'bg-raised b-strong'
                    }`}
                    aria-hidden="true"
                  ></span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl t-ink">{exp.title}</h3>
                    <span className="annot t-faint">{exp.period}</span>
                  </div>
                  <p className="annot-md t-accent mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 t-soft text-sm leading-relaxed">
                        <span className="annot t-faint mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education + certifications */}
          <div className="scroll-fade-in-right space-y-10">
            <div>
              <p className="annot t-faint mb-5">Education</p>
              <div className="space-y-4">
                {education.map((edu) => (
                  <article key={edu.degree} className="panel ticks p-5">
                    <span className="tick-b"></span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                      <h3 className="font-display text-xl t-ink leading-snug">{edu.degree}</h3>
                      <span className="annot t-faint">{edu.period}</span>
                    </div>
                    <p className="annot-md t-accent mb-3">{edu.school}</p>
                    <ul className="space-y-1">
                      {edu.notes.map((note, i) => (
                        <li key={i} className="flex items-start gap-2.5 t-soft text-sm leading-relaxed">
                          <span className="annot t-faint mt-0.5 shrink-0">—</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="annot t-faint mb-5">Certifications ledger</p>
              <div className="border b-strong bg-raised">
                {certifications.map((cert, idx) => (
                  <div
                    key={cert.name}
                    className={`flex items-baseline justify-between gap-4 px-4 py-3 ${
                      idx > 0 ? 'border-t b-line' : ''
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="t-ink text-sm font-medium leading-snug">{cert.name}</p>
                      <p className="annot t-faint mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className="font-annot text-xs t-soft shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
