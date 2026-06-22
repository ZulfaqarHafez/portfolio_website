import { useTheme } from '../contexts/ThemeContext';

const channels = [
  {
    key: 'email',
    label: 'zulfaqarhafez@gmail.com',
    href: 'mailto:zulfaqarhafez@gmail.com',
    ext: false,
  },
  {
    key: 'github',
    label: 'github.com/ZulfaqarHafez',
    href: 'https://github.com/ZulfaqarHafez',
    ext: true,
  },
  {
    key: 'linkedin',
    label: 'linkedin.com/in/zulfaqar-hafez',
    href: 'https://linkedin.com/in/zulfaqar-hafez',
    ext: true,
  },
];

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className={`relative py-14 md:py-20 transition-colors duration-300 ${
        isDark ? 'section-tone-dark-contact' : 'section-tone-light-contact'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-10 right-10 w-52 h-52 rounded-full blur-3xl ${isDark ? 'bg-accent/8' : 'bg-accent/10'}`}></div>
        <div className={`absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-secondary/18' : 'bg-secondary/10'}`}></div>
        <div className={`absolute inset-0 tech-grid-soft ${isDark ? 'opacity-[0.05]' : 'opacity-[0.04]'}`}></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-8 scroll-fade-in">
            <p className={`section-kicker mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Contact
            </p>
            <h2 className={`section-title mb-3 ${isDark ? 'text-luxury-cream' : 'text-primary'}`}>
              Let's Connect
            </h2>
            <div className="section-divider mx-auto"></div>
          </div>

          {/* Terminal window */}
          <div className="scroll-fade-in rounded-xl overflow-hidden border border-accent/30 shadow-luxury-lg">

            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#010f0c] border-b border-[#0a2e24] select-none">
              <span className="w-3 h-3 rounded-full bg-red-400/80 shrink-0"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 shrink-0"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 shrink-0"></span>
              <span className="flex-1 text-center text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
                zulfaqar@portfolio:~/contact
              </span>
            </div>

            {/* Terminal body, always dark for authenticity */}
            <div className="bg-[#011f1a] px-5 py-6 md:px-8 md:py-7 font-mono text-sm leading-relaxed overflow-x-auto">

              {/* Header comment block */}
              <div className="text-neutral-600 text-xs mb-5 select-none space-y-0.5">
                <p>#=================================================</p>
                <p>#  Let's build something impactful together</p>
                <p>#  Open to internships, collaborations & AI projects</p>
                <p>#=================================================</p>
              </div>

              {/* whoami */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[#b18b57]">~/contact</span>
                  <span className="text-neutral-600">$</span>
                  <span className="text-neutral-200">whoami</span>
                </div>
                <p className="mt-1.5 pl-1 text-neutral-400">
                  Zulfaqar Hafez // AI Engineer &amp; Community Innovator
                </p>
              </div>

              {/* availability */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[#b18b57]">~/contact</span>
                  <span className="text-neutral-600">$</span>
                  <span className="text-neutral-200">cat availability.txt</span>
                </div>
                <div className="mt-1.5 pl-1 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span className="text-emerald-400 text-xs sm:text-sm">
                    ACTIVE // open to internships &amp; collaborations
                  </span>
                </div>
              </div>

              {/* channels */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[#b18b57]">~/contact</span>
                  <span className="text-neutral-600">$</span>
                  <span className="text-neutral-200">ls channels/</span>
                </div>
                <ul className="mt-2 pl-1 space-y-2" aria-label="Contact channels">
                  {channels.map(({ key, label, href, ext }) => (
                    <li key={key} className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-neutral-600 hidden sm:inline text-xs shrink-0">-rw-r--r--</span>
                      <span className="text-[#b18b57] shrink-0 w-16 text-xs sm:text-sm">{key}</span>
                      <a
                        href={href}
                        target={ext ? '_blank' : undefined}
                        rel={ext ? 'noopener noreferrer' : undefined}
                        className="text-neutral-300 text-xs sm:text-sm hover:text-[#b18b57] transition-colors underline underline-offset-2 decoration-neutral-700 hover:decoration-[#b18b57]"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA prompt */}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className="text-[#b18b57]">~/contact</span>
                  <span className="text-neutral-600">$</span>
                  <span className="text-neutral-200">./reach_out.sh</span>
                  <span
                    className="inline-block w-2 h-[1em] bg-[#b18b57]/80 animate-blink align-middle"
                    aria-hidden="true"
                  ></span>
                </div>
                <a
                  href="mailto:zulfaqarhafez@gmail.com"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gold-gradient text-primary rounded-lg font-sans font-bold text-sm hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me Directly
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
