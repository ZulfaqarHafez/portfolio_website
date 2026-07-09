const claims = [
  {
    n: 1,
    text: 'A method of building AI systems, wherein each said system is aimed at a problem a real person actually has.',
  },
  {
    n: 2,
    text: 'The method of claim 1, wherein a prototype is carried past the demo — through deployment, users, and the unglamorous maintenance nobody tweets about.',
  },
  {
    n: 3,
    text: 'The method of claim 1, further comprising community work: club leadership, volunteering with Special Olympics, and other duties that do not compile.',
  },
  {
    n: 4,
    text: 'An engineer according to claims 1–3, characterized by an unreasonable fondness for hackathon weekends.',
  },
];

const materials = [
  {
    ref: 'A',
    category: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Computer Vision', 'NLP', 'LLMs', 'Deep Learning', 'Scikit-learn'],
  },
  {
    ref: 'B',
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'R'],
  },
  {
    ref: 'C',
    category: 'Data Engineering',
    items: ['PySpark', 'Pandas', 'NumPy', 'ETL', 'PostgreSQL', 'MongoDB'],
  },
  {
    ref: 'D',
    category: 'Web & APIs',
    items: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Tailwind CSS', 'Supabase'],
  },
  {
    ref: 'E',
    category: 'Visualization',
    items: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
  },
];

const dossier = [
  { label: 'Currently', value: 'Applied AI Engineer (CV) intern, Louis Dreyfus Company' },
  { label: 'Studying', value: 'BSc (Hons) Applied AI, Singapore Institute of Technology · 2027' },
  { label: 'Previously', value: 'Product Lead @ People’s Association · President, SIT Magical Hearts' },
  { label: 'Base', value: 'Singapore' },
];

const AboutSkills = () => {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="container-custom px-4 sm:px-6">
        {/* Section header */}
        <div className="scroll-fade-in flex items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="annot t-accent mb-2">Fig. 2 · Specification</p>
            <h2 className="font-display t-ink text-4xl sm:text-5xl">Abstract &amp; Claims</h2>
          </div>
          <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-3"></div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          {/* Abstract + claims */}
          <div className="scroll-fade-in-left">
            <p className="annot t-faint mb-3">Abstract</p>
            <div className="space-y-4 t-soft text-base leading-relaxed mb-9">
              <p>
                <span className="font-display text-2xl t-ink">An AI engineer is disclosed</span> — trained in
                machine learning and computer vision at the Singapore Institute of Technology, and currently
                embedded at Louis Dreyfus Company, where computer vision meets one of the oldest industries
                on earth: agriculture.
              </p>
              <p>
                The invention departs from prior art in one respect: it refuses to stop at the notebook.
                Models get deployed, apps get shipped to real users — persons with disabilities navigating
                public transport, seniors at risk of falls, foreign workers deciphering payslips — and the
                work is only called done when someone outside the repo benefits from it.
              </p>
            </div>

            <p className="annot t-faint mb-3">Claims</p>
            <ol className="space-y-3">
              {claims.map((claim) => (
                <li key={claim.n} className="flex gap-4 border-l-2 b-accent pl-4 py-0.5">
                  <span className="font-display t-accent text-xl leading-snug shrink-0">{claim.n}.</span>
                  <p className="t-soft text-sm sm:text-[0.94rem] leading-relaxed">{claim.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Dossier card */}
          <aside className="scroll-fade-in-right lg:sticky lg:top-28">
            <div className="panel ticks p-6">
              <span className="tick-b"></span>
              <p className="annot t-faint mb-4 pb-3 border-b b-line">Filing particulars</p>
              <dl className="space-y-4">
                {dossier.map((row) => (
                  <div key={row.label} className="grid grid-cols-[6.2rem_1fr] gap-3 items-baseline">
                    <dt className="annot t-accent">{row.label}</dt>
                    <dd className="t-ink text-sm leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-4 border-t b-line flex items-center justify-between gap-2">
                <span className="annot t-faint">Examiner's note</span>
                <span className="font-annot text-xs t-soft italic">builds things, on purpose</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Bill of materials */}
        <div id="skills" className="scroll-fade-in">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <p className="annot t-accent mb-2">Fig. 3 · Parts list</p>
              <h2 className="font-display t-ink text-3xl sm:text-4xl">Bill of Materials</h2>
            </div>
            <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-2.5"></div>
          </div>

          <div className="border b-strong bg-raised stagger-children">
            {materials.map((group, idx) => (
              <div
                key={group.ref}
                className={`grid sm:grid-cols-[10.5rem_1fr] gap-x-6 gap-y-2 px-5 py-4 ${
                  idx > 0 ? 'border-t b-line' : ''
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="annot t-accent">{group.ref}</span>
                  <h3 className="font-annot text-xs font-semibold uppercase tracking-[0.1em] t-ink">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
