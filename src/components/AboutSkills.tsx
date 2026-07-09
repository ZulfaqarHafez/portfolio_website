const bento = [
  {
    span: 'sm:col-span-2',
    kicker: 'Right now',
    title: 'Louis Dreyfus Company',
    body: 'Applied AI Engineer intern (computer vision) — building models that look at the physical world of agricultural commodities and make sense of it.',
  },
  {
    span: '',
    kicker: 'Studying',
    title: 'BSc (Hons) Applied AI',
    body: 'Singapore Institute of Technology, class of 2027.',
  },
  {
    span: '',
    kicker: 'Community',
    title: '300+ lives reached',
    body: 'Ex-President of SIT Magical Hearts; Special Olympics volunteer.',
  },
  {
    span: '',
    kicker: 'Credentials',
    title: 'NVIDIA-certified ×3',
    body: 'Deep Learning, Generative AI with Diffusion Models, Adversarial ML — plus AI4I by AI Singapore.',
    href: '#credentials',
  },
  {
    span: '',
    kicker: 'Open weights',
    title: 'Two published models',
    body: 'Including ClaimLens, a DeBERTa-v3 claim-verification model, live on Hugging Face.',
    href: 'https://huggingface.co/Zulfhagez',
  },
];

const toolshed = [
  {
    n: '01',
    category: 'AI & Machine Learning',
    proof: 'Applied daily at Louis Dreyfus Company — and behind every exhibit below.',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Computer Vision', 'NLP', 'LLMs', 'Deep Learning', 'Scikit-learn'],
    span: 'lg:col-span-3',
  },
  {
    n: '02',
    category: 'Web & APIs',
    proof: 'The stack behind GuideMeSG, FairWork, and this very site.',
    items: ['React', 'Next.js', 'FastAPI', 'Flask', 'Node.js', 'Tailwind CSS', 'Supabase'],
    span: 'lg:col-span-3',
  },
  {
    n: '03',
    category: 'Languages',
    proof: 'Python first, TypeScript close behind.',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'R'],
    span: 'lg:col-span-2',
  },
  {
    n: '04',
    category: 'Data Engineering',
    proof: 'Pipelines that feed the models.',
    items: ['PySpark', 'Pandas', 'NumPy', 'ETL', 'PostgreSQL', 'MongoDB'],
    span: 'lg:col-span-2',
  },
  {
    n: '05',
    category: 'Visualization',
    proof: 'If it can\'t be explained, it didn\'t happen.',
    items: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
    span: 'lg:col-span-2',
  },
];

const AboutSkills = () => {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-custom px-5 sm:px-8">
        {/* Header */}
        <div className="scroll-fade-in mb-12 md:mb-16 max-w-3xl">
          <p className="label t-accent mb-4">01 — About</p>
          <h2 className="display-hero t-ink text-4xl sm:text-5xl lg:text-6xl">
            Technology is only interesting when it{' '}
            reaches people<span className="t-accent">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start mb-20 md:mb-24">
          {/* Story */}
          <div className="scroll-fade-in-left space-y-5 t-soft text-base sm:text-lg leading-relaxed">
            <p>
              I'm an AI engineer who refuses to stop at the notebook. Models get deployed, apps get
              shipped, and the work is only done when someone outside the repo benefits — persons
              with disabilities navigating public transport, seniors at risk of falls, foreign
              workers deciphering payslips.
            </p>
            <p>
              By day I'm teaching machines to see for one of the world's oldest industries;
              by night (and most weekends) I'm at a hackathon or building for the community.
              My LinkedIn says <em className="t-accent not-italic font-medium">"aspiring farmer"</em> —
              agriculture AI is close enough for now.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 t-accent font-semibold group">
              Let's build something together
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Bento */}
          <div className="scroll-fade-in-right grid sm:grid-cols-2 gap-4 stagger-children">
            {bento.map((cell) => {
              const inner = (
                <>
                  <p className="label t-accent mb-3">{cell.kicker}</p>
                  <h3 className="font-display text-xl sm:text-2xl t-ink mb-1.5">{cell.title}</h3>
                  <p className="t-soft text-sm leading-relaxed">{cell.body}</p>
                </>
              );
              const external = cell.href?.startsWith('http');
              return cell.href ? (
                <a
                  key={cell.title}
                  href={cell.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={`card card-hover p-5 ${cell.span} block`}
                >
                  {inner}
                </a>
              ) : (
                <div key={cell.title} className={`card card-hover p-5 ${cell.span}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* Toolshed */}
        <div id="skills" className="scroll-fade-in observe-visible">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="label t-accent mb-3">02 — Craft</p>
              <h2 className="font-display t-ink text-3xl sm:text-4xl">
                What I build with<span className="t-accent">.</span>
              </h2>
            </div>
            <p className="label t-faint">no skill bars — the work below is the proof</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 stagger-children">
            {toolshed.map((group) => (
              <div key={group.category} className={`card card-hover sheen p-6 ${group.span}`}>
                <span className="numeral" aria-hidden="true">{group.n}</span>
                <h3 className="font-display text-xl sm:text-2xl t-ink mb-1 pr-14">{group.category}</h3>
                <p className="t-faint text-sm mb-4 pr-14">{group.proof}</p>
                <div className="grow-bar w-full mb-5"></div>
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
