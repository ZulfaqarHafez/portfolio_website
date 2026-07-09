import { useEffect, useState } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const socials = [
  { name: 'GitHub', href: 'https://github.com/ZulfaqarHafez' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/zulfaqar-hafez' },
  { name: 'Hugging Face', href: 'https://huggingface.co/Zulfhagez' },
];

const sgTime = () =>
  new Intl.DateTimeFormat('en-SG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Singapore',
  }).format(new Date());

const Contact = () => {
  const [time, setTime] = useState(sgTime);
  const emailRef = useMagnetic<HTMLAnchorElement>(0.18);

  useEffect(() => {
    const id = window.setInterval(() => setTime(sgTime()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-deep border-t b-line overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="glow-blob breathe w-[36rem] h-[36rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, var(--glow-a), transparent 65%)' }}></div>
      </div>

      <div className="container-custom relative z-10 px-5 sm:px-8 text-center">
        <p className="scroll-fade-in label t-accent mb-6">06 — Contact</p>

        <h2 className="scroll-fade-in display-hero t-ink text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 max-w-4xl mx-auto">
          Let's grow something{' '}
          <span className="display-italic t-accent">together.</span>
        </h2>

        <p className="scroll-fade-in t-soft text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Open to internships, collaborations, and interesting problems. Recruiters, builders, and
          community organizations welcome — replies usually land within the day.
        </p>

        <div className="scroll-fade-in flex flex-col items-center gap-6 mb-14">
          <a
            ref={emailRef}
            href="mailto:zulfaqarhafez@gmail.com"
            className="btn-gold !text-base sm:!text-lg !px-10 !py-5"
          >
            zulfaqarhafez@gmail.com
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <div className="flex items-center gap-2.5">
            <span className="status-pulse w-2 h-2 rounded-full bg-accent-solid"></span>
            <span className="label t-faint">
              Singapore · {time} local — probably awake, possibly training a model
            </span>
          </div>
        </div>

        <div className="scroll-fade-in flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-2.5 !px-5 !text-sm"
            >
              {s.name} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
