import { useEffect, useState } from 'react';
import CountUp from './CountUp';
import { useMagnetic } from '../hooks/useMagnetic';
import ArtTopo from './art/ArtTopo';

const WORDS = ['sees.', 'learns.', 'ships.', 'grows.'];

const stats = [
  { end: 12, suffix: '+', label: 'Projects built' },
  { end: 6, suffix: '', label: 'Hackathon finishes' },
  { end: 300, suffix: '+', label: 'Lives reached' },
  { end: 2, suffix: '', label: 'Models published' },
];

const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const primaryRef = useMagnetic<HTMLAnchorElement>(0.22);
  const secondaryRef = useMagnetic<HTMLAnchorElement>(0.22);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setWordIdx((i) => (i + 1) % WORDS.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-14">
      {/* Ambient garden glow + bespoke contour backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-90">
          <ArtTopo />
        </div>
        <div className="glow-blob breathe w-[34rem] h-[34rem] -top-40 -left-40" style={{ background: 'radial-gradient(circle, var(--glow-a), transparent 70%)' }}></div>
        <div className="glow-blob w-[30rem] h-[30rem] -bottom-32 -right-24" style={{ background: 'radial-gradient(circle, var(--glow-b), transparent 70%)' }}></div>
      </div>

      <div className="container-custom relative z-10 px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
          {/* Statement */}
          <div className="scroll-fade-in visible">
            <div className="inline-flex items-center gap-2.5 mb-7 pl-3 pr-4 py-2 rounded-full border b-line bg-accent-wash">
              <span className="status-pulse w-2 h-2 rounded-full bg-accent-solid shrink-0"></span>
              <span className="label-md t-accent">
                Growing computer vision @ Louis Dreyfus Company
              </span>
            </div>

            <p className="label t-faint mb-4">
              Zulfaqar Hafez · AI Engineer · Singapore <span className="t-accent">· "aspiring farmer"</span>
            </p>

            <h1 className="display-hero t-ink text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] mb-7">
              I build AI that
              <br />
              <span className="display-italic t-accent inline-block min-w-[5.5ch]">
                <span key={wordIdx} className="word-swap">{WORDS[wordIdx]}</span>
              </span>
            </h1>

            <p className="t-soft text-base sm:text-lg leading-relaxed max-w-xl mb-9">
              Computer vision, language models, and the full stack around them — every project
              pointed at a problem someone actually has. Trained at the Singapore Institute of
              Technology, field-tested across six hackathons, currently teaching machines to see
              for one of the world's largest agricultural merchants.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-12">
              <a ref={primaryRef} href="#projects" className="btn-gold">
                See the work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a ref={secondaryRef} href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-outline">
                Download résumé
              </a>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={stat.label} className={`${idx > 0 ? 'sm:border-l sm:pl-6 b-line' : ''} ${idx % 2 === 1 ? 'border-l pl-6 sm:pl-6 b-line' : ''}`}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      className="block font-display text-3xl sm:text-4xl t-ink leading-none"
                    />
                    <span className="mt-1.5 block label t-faint">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="scroll-fade-in visible relative mx-auto lg:mx-0 lg:justify-self-end">
            <div className="relative w-64 sm:w-72">
              {/* breathing glow */}
              <div
                className="absolute -inset-8 rounded-full breathe pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)' }}
                aria-hidden="true"
              ></div>

              <div className="relative card overflow-hidden !rounded-2xl">
                <img
                  src="/images/zul.jpg"
                  alt="Zulfaqar Hafez"
                  className="w-full aspect-[3/4] object-cover portrait-treat"
                />
                <div
                  className="absolute inset-x-0 bottom-0 px-4 py-3"
                  style={{ background: 'linear-gradient(to top, rgba(2,23,17,0.85), transparent)' }}
                >
                  <p className="text-sm font-medium text-white">Zulfaqar (Zulf) Hafez</p>
                  <p className="label" style={{ color: 'rgba(242,240,227,0.72)' }}>SIT · Applied AI · 2027</p>
                </div>
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px var(--accent-glow)' }} aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden md:flex justify-center">
          <a href="#about" className="group flex flex-col items-center gap-2 t-faint hover:t-accent transition-colors" aria-label="Scroll to about">
            <span className="label">Scroll to explore</span>
            <span className="w-px h-10 bg-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
