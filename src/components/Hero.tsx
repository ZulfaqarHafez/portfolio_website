import CountUp from './CountUp';

const specs = [
  { end: 5, suffix: '+', label: 'Shipped projects' },
  { end: 6, suffix: '', label: 'Hackathon finishes' },
  { end: 300, suffix: '+', label: 'Lives reached' },
  { end: 2, suffix: '', label: 'Published models' },
];

const annotations = [
  { ref: '10', note: 'The applicant' },
  { ref: '12', note: 'Ships models to production' },
  { ref: '14', note: 'Community-first bias, load-bearing' },
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden drafting-grid pt-28 md:pt-36 pb-10 md:pb-14">
      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Sheet header */}
        <div className="scroll-fade-in flex items-center justify-between gap-4 border-b b-strong pb-3 mb-8 md:mb-12">
          <p className="annot t-faint">Apparatus &amp; Method for Applied Intelligence</p>
          <p className="annot t-faint hidden sm:block">Fig. 1 · Sheet 1 of 1 · Singapore</p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          {/* Left: the claim */}
          <div className="scroll-fade-in-left">
            <div className="inline-flex items-center gap-2.5 mb-6 px-3 py-1.5 border b-line bg-ok-wash">
              <span className="status-pulse w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--ok)' }}></span>
              <span className="annot t-ok">Currently · Applied AI Engineer intern @ Louis Dreyfus Company</span>
            </div>

            <h1 className="font-display t-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-4">
              Zulfaqar Hafez
            </h1>

            <p className="annot-md t-accent mb-1.5">
              Applied AI Engineer · Computer Vision
            </p>
            <p className="annot t-faint mb-7">
              also answers to: “aspiring farmer”
              <a href="#footnote-1" className="t-accent no-underline" aria-label="See footnote one">
                *
              </a>
            </p>

            <p className="t-soft text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              I build machine learning systems that ship — computer vision, language models, and the
              full stack around them — and I point every one at a real problem someone actually has.
              Trained at the Singapore Institute of Technology, field-tested in six hackathons,
              currently teaching machines to see for one of the world's largest agricultural merchants.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#projects" className="btn-ink">
                Inspect the exhibits
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-ghost">
                Certified copy (PDF)
              </a>
            </div>

            {/* Specifications table */}
            <div className="border b-strong">
              <p className="annot t-faint px-4 pt-3">Specifications</p>
              <dl className="grid grid-cols-2 sm:grid-cols-4">
                {specs.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`px-4 py-3.5 border-t b-line ${idx % 2 === 1 ? 'border-l' : ''} ${
                      idx >= 2 ? 'sm:border-l' : ''
                    }`}
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <CountUp
                        end={stat.end}
                        suffix={stat.suffix}
                        className="block font-display text-3xl sm:text-4xl t-ink leading-none"
                      />
                      <span className="mt-1.5 block annot t-faint">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p id="footnote-1" className="annot t-faint mt-5 normal-case tracking-normal text-[0.7rem] leading-relaxed">
              * Building computer vision for agricultural commodities at Louis Dreyfus Company.
              The farming is currently metaphorical. Mostly.
            </p>
          </div>

          {/* Right: FIG. 1 — the annotated applicant */}
          <div className="scroll-fade-in-right">
            <figure className="relative max-w-[340px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="panel ticks p-3 pb-2">
                <span className="tick-b"></span>
                <div className="relative overflow-hidden border b-line">
                  <img
                    src="/images/zul.jpg"
                    alt="Zulfaqar Hafez"
                    className="w-full aspect-[3/4] object-cover"
                    style={{ filter: 'saturate(0.88) contrast(1.03)' }}
                  />
                  {/* reference numeral markers on the image */}
                  <span className="absolute top-[16%] right-[8%] annot t-ink bg-raised border b-strong px-1.5 py-0.5" aria-hidden="true">10</span>
                  <span className="absolute top-[52%] left-[7%] annot t-ink bg-raised border b-strong px-1.5 py-0.5" aria-hidden="true">12</span>
                  <span className="absolute bottom-[30%] right-[10%] annot t-ink bg-raised border b-strong px-1.5 py-0.5" aria-hidden="true">14</span>
                </div>
                <figcaption className="flex items-center justify-between gap-2 pt-2.5 pb-1 px-0.5">
                  <span className="annot t-ink">Fig. 1 — The Applicant</span>
                  <span className="annot t-faint">Scale 1:1</span>
                </figcaption>
              </div>

              {/* stamp overlapping the photo corner */}
              <div className="absolute bottom-16 -right-3 sm:-right-5">
                <span className="stamp bg-raised">Open to opportunity</span>
              </div>
            </figure>

            {/* legend */}
            <div className="max-w-[340px] mx-auto lg:mx-0 lg:ml-auto mt-9">
              <p className="annot t-faint mb-2">Reference numerals</p>
              <ul className="space-y-1.5">
                {annotations.map((a) => (
                  <li key={a.ref} className="flex items-baseline gap-3">
                    <span className="annot t-accent shrink-0">{a.ref}</span>
                    <span className="dim-rule w-6 shrink-0 self-center opacity-60"></span>
                    <span className="font-annot text-xs t-soft">{a.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pipeline schematic, echoing the banner */}
        <div className="scroll-fade-in mt-14 md:mt-20 hidden md:block" aria-hidden="true">
          <svg viewBox="0 0 1000 96" className="w-full" fill="none">
            <g stroke="var(--line-strong)" strokeWidth="1">
              <rect x="40" y="24" width="200" height="48" className="draw-on-load" style={{ '--dash': 500 } as React.CSSProperties} />
              <rect x="400" y="24" width="200" height="48" className="draw-on-load" style={{ '--dash': 500 } as React.CSSProperties} />
              <rect x="760" y="24" width="200" height="48" className="draw-on-load" style={{ '--dash': 500 } as React.CSSProperties} />
              <line x1="240" y1="48" x2="392" y2="48" className="draw-on-load" style={{ '--dash': 160 } as React.CSSProperties} />
              <line x1="600" y1="48" x2="752" y2="48" className="draw-on-load" style={{ '--dash': 160 } as React.CSSProperties} />
              <path d="M386 43 L 396 48 L 386 53" className="draw-on-load" style={{ '--dash': 30 } as React.CSSProperties} />
              <path d="M746 43 L 756 48 L 746 53" className="draw-on-load" style={{ '--dash': 30 } as React.CSSProperties} />
            </g>
            <g fill="var(--ink-faint)" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2.5">
              <text x="140" y="52" textAnchor="middle" dominantBaseline="middle">PERCEPTION</text>
              <text x="500" y="52" textAnchor="middle" dominantBaseline="middle">REASONING</text>
              <text x="860" y="52" textAnchor="middle" dominantBaseline="middle">VERIFICATION</text>
              <text x="140" y="14" textAnchor="middle" fontSize="9">100</text>
              <text x="500" y="14" textAnchor="middle" fontSize="9">200</text>
              <text x="860" y="14" textAnchor="middle" fontSize="9">300</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
