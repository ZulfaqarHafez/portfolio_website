const channels = [
  {
    key: 'Email',
    label: 'zulfaqarhafez@gmail.com',
    href: 'mailto:zulfaqarhafez@gmail.com',
    ext: false,
  },
  {
    key: 'GitHub',
    label: 'github.com/ZulfaqarHafez',
    href: 'https://github.com/ZulfaqarHafez',
    ext: true,
  },
  {
    key: 'LinkedIn',
    label: 'linkedin.com/in/zulfaqar-hafez',
    href: 'https://linkedin.com/in/zulfaqar-hafez',
    ext: true,
  },
  {
    key: 'HF Hub',
    label: 'huggingface.co/Zulfhagez',
    href: 'https://huggingface.co/Zulfhagez',
    ext: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-paper-deep border-t b-line drafting-grid">
      <div className="container-custom px-4 sm:px-6">
        <div className="scroll-fade-in flex items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="annot t-accent mb-2">Fig. 7 · Official channels</p>
            <h2 className="font-display t-ink text-4xl sm:text-5xl">Correspondence</h2>
          </div>
          <div className="dim-rule flex-1 max-w-40 hidden sm:block mb-3"></div>
        </div>

        <div className="scroll-fade-in max-w-3xl mx-auto">
          <div className="panel ticks relative p-7 sm:p-10">
            <span className="tick-b"></span>

            <div className="absolute -top-4 right-6 sm:right-10">
              <span className="stamp stamp-ok bg-raised">Response guaranteed</span>
            </div>

            <p className="font-display text-2xl sm:text-3xl t-ink leading-snug mb-3 max-w-xl">
              To whom it may concern: I'm open to internships, collaborations, and interesting problems.
            </p>
            <p className="t-soft text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Recruiters, builders, and community organizations welcome. Replies arrive faster than a
              model trains — usually within the day.
            </p>

            <div className="border b-strong mb-8">
              {channels.map(({ key, label, href, ext }, idx) => (
                <a
                  key={key}
                  href={href}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  className={`flex items-baseline gap-4 px-4 sm:px-5 py-3.5 group transition-colors hover:bg-accent-wash ${
                    idx > 0 ? 'border-t b-line' : ''
                  }`}
                >
                  <span className="annot t-accent w-16 shrink-0">{key}</span>
                  <span className="font-annot text-sm t-soft group-hover:t-ink transition-colors truncate">
                    {label}
                  </span>
                  <span className="ml-auto annot t-faint group-hover:t-accent transition-colors shrink-0">
                    {ext ? '↗' : '→'}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:zulfaqarhafez@gmail.com" className="btn-ink">
                File a correspondence
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="/Zulfaqar_Hafez_Resume.pdf" download className="btn-ghost">
                Request the résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
