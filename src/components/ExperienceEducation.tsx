const experiences = [
  {
    title: 'Applied AI Engineer (Computer Vision)',
    company: 'Louis Dreyfus Company',
    kind: 'Internship',
    period: 'Mar 2026 — Present',
    current: true,
    points: [
      'Building computer vision systems for agricultural commodity operations at one of the world\'s largest agri-merchants.',
      'Carrying models from prototype to production against messy, physical-world imagery.',
    ],
  },
  {
    title: 'Product Lead (Citizen Developer)',
    company: 'People\'s Association',
    kind: 'Seasonal',
    period: 'Sep 2025 — Present',
    current: true,
    points: [
      'Liaison between the technical team and PA — translating community requirements into technical specs.',
      'Led the product roadmap for the Tengah allotment-garden initiative.',
    ],
  },
  {
    title: 'President',
    company: 'SIT Magical Hearts',
    kind: 'Leadership',
    period: 'Dec 2024 — Dec 2025',
    current: false,
    points: [
      'Grew club membership by 50%; streamlined volunteer deployment.',
      'Delivered programs reaching 300+ beneficiaries.',
    ],
  },
  {
    title: 'Order Management Specialist',
    company: 'Infineon Technologies',
    kind: 'Internship',
    period: 'Mar 2021 — Aug 2021',
    current: false,
    points: [
      'Automated semiconductor market-news gathering with Python, Selenium, and Beautiful Soup.',
    ],
  },
];

const education = [
  {
    degree: 'BSc (Hons) Applied Artificial Intelligence',
    school: 'Singapore Institute of Technology',
    period: '2024 — 2027',
    note: 'Five hackathon finals while enrolled · CIT-funded project · club president',
  },
  {
    degree: 'Diploma in Business Information Systems',
    school: 'Republic Polytechnic',
    period: '2019 — 2022',
    note: 'Top 20, Google Cloud Hackathon SG 2022 · web development & business analytics',
  },
];

const certs = [
  {
    name: 'Fundamentals of Deep Learning',
    by: 'NVIDIA Deep Learning Institute',
    year: '2025',
    tint: 'rgba(118, 185, 0, 0.16)',
    dot: '#76b900',
    note: 'The foundations, certified at the source.',
  },
  {
    name: 'Generative AI with Diffusion Models',
    by: 'NVIDIA Deep Learning Institute',
    year: '2025',
    tint: 'rgba(118, 185, 0, 0.16)',
    dot: '#76b900',
    note: 'From noise to image, end to end.',
  },
  {
    name: 'Exploring Adversarial Machine Learning',
    by: 'NVIDIA Deep Learning Institute',
    year: '2025',
    tint: 'rgba(118, 185, 0, 0.16)',
    dot: '#76b900',
    note: 'Knowing how models break — so mine don\'t.',
  },
  {
    name: 'AI4I — Literacy in AI',
    by: 'AI Singapore',
    year: '2024',
    tint: 'rgba(226, 88, 62, 0.16)',
    dot: '#e2583e',
    note: 'National AI programme, certified.',
  },
  {
    name: 'Python & Problem Solving',
    by: 'HackerRank',
    year: '2021',
    tint: 'rgba(46, 200, 102, 0.16)',
    dot: '#2ec866',
    note: 'Verified fundamentals.',
  },
  {
    name: 'Advanced Google Analytics',
    by: 'Google',
    year: '2021',
    tint: 'rgba(244, 180, 0, 0.18)',
    dot: '#f4b400',
    note: 'Numbers that tell stories.',
  },
];

const ExperienceEducation = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="glow-blob w-[26rem] h-[26rem] bottom-0 -left-32" style={{ background: 'radial-gradient(circle, var(--glow-a), transparent 70%)', position: 'absolute' }} aria-hidden="true"></div>

      <div className="container-custom relative z-10 px-5 sm:px-8">
        <div className="scroll-fade-in mb-12 md:mb-16">
          <p className="label t-accent mb-4">06 — Journey</p>
          <h2 className="display-hero t-ink text-4xl sm:text-5xl lg:text-6xl">
            Still growing<span className="t-accent">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-start">
          {/* Timeline */}
          <div className="scroll-fade-in observe-visible relative pl-8">
            <div className="vine" aria-hidden="true"></div>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <article key={exp.title} className="relative">
                  <span
                    className={`absolute -left-[2.42rem] top-2 w-3.5 h-3.5 rounded-full border-2 ${
                      exp.current ? 'bg-accent-solid status-pulse' : 'bg-surface'
                    }`}
                    style={{ borderColor: exp.current ? 'var(--accent)' : 'var(--line-strong)' }}
                    aria-hidden="true"
                  ></span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <span className="label t-faint">{exp.period}</span>
                    <span className="chip !py-1 !px-2.5">{exp.kind}</span>
                    {exp.current && (
                      <span className="label t-accent">— now</span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl sm:text-[1.7rem] t-ink leading-snug">
                    {exp.title}
                  </h3>
                  <p className="t-accent font-medium text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-1.5 max-w-xl">
                    {exp.points.map((point, i) => (
                      <li key={i} className="t-soft text-sm sm:text-[0.94rem] leading-relaxed flex gap-2.5">
                        <span className="t-faint shrink-0 mt-0.5">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education + certs */}
          <div className="space-y-10">
            <div className="scroll-fade-in-right">
              <p className="label t-faint mb-5">Education</p>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="card card-hover p-6">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-display text-xl t-ink leading-snug">{edu.degree}</h3>
                      <span className="label t-faint shrink-0 mt-1.5">{edu.period}</span>
                    </div>
                    <p className="t-accent text-sm font-medium mb-2">{edu.school}</p>
                    <p className="t-faint text-sm leading-relaxed">{edu.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-fade-in-right card card-hover p-6">
              <p className="label t-faint mb-3">Beyond the code</p>
              <h3 className="font-display text-xl t-ink mb-2">Community, always</h3>
              <p className="t-soft text-sm leading-relaxed">
                Special Olympics sports volunteer, SIT Magical Hearts member since 2024 and
                president through 2025 — 300+ beneficiaries reached across outreach programs.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials showcase */}
        <div id="credentials" className="scroll-fade-in observe-visible mt-20 md:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
            <div>
              <p className="label t-accent mb-3">Credentials</p>
              <h3 className="font-display t-ink text-3xl sm:text-4xl">
                Certified, verifiably<span className="t-accent">.</span>
              </h3>
            </div>
            <p className="label t-faint">full credential IDs on LinkedIn</p>
          </div>
          <div className="grow-bar w-full max-w-48 mb-8"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {certs.map((cert) => (
              <div key={cert.name} className="card card-hover sheen p-6 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-2 label t-ink px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: cert.tint }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cert.dot }}></span>
                    {cert.by}
                  </span>
                  <span className="label t-faint">{cert.year}</span>
                </div>
                <h4 className="font-display text-xl t-ink leading-snug mb-2">{cert.name}</h4>
                <p className="t-faint text-sm mt-auto">{cert.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
