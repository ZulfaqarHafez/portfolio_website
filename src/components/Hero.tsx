import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI Engineer & Community Innovator';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-22 md:pt-24 pb-10 md:pb-14 min-h-screen flex items-center ${
        isDark ? 'section-tone-dark-hero' : 'section-tone-light-hero'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute inset-0 ${isDark ? 'bg-luxury-gradient opacity-50' : 'bg-linear-to-br from-white via-neutral-50 to-neutral-100 opacity-90'}`}></div>
        <div className={`absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-accent/12' : 'bg-accent/16'}`}></div>
        <div className={`absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-secondary/24' : 'bg-secondary/16'}`}></div>
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.04]' : 'opacity-[0.03]'} hero-grid`}></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-7 lg:gap-10 items-center">
          <div className="scroll-fade-in-left">
            <p className={`section-kicker mb-3 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Hi there! I'm
            </p>

            <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 ${isDark ? 'text-white' : 'text-primary'}`}>
              Zulfaqar Hafez
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl font-semibold accent-readable mb-5 md:mb-6 min-h-8 sm:min-h-9">
              <span className="inline-block">
                {typedText}
                <span className={`inline-block w-0.5 h-[0.9em] bg-accent ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : 'animate-blink'}`}></span>
              </span>
            </h2>

            <p className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-6 ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
              Leveraging AI and machine learning to solve real-world problems and transform community challenges into tech solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <a
                href="#projects"
                className="group px-6 py-3 bg-gold-gradient text-primary rounded-lg font-bold text-sm sm:text-base hover:shadow-luxury-lg transition-all duration-300 shadow-luxury transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/Zulfaqar_Hafez_Resume.pdf"
                download
                className={`group px-6 py-3 border-2 border-accent rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1 ${
                  isDark ? 'text-white hover:bg-accent hover:text-primary' : 'text-primary hover:bg-accent hover:text-primary'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          <div className="scroll-fade-in-right">
            <div className="relative max-w-[178px] sm:max-w-[200px] md:max-w-[212px] mx-auto group">
              <div className={`relative rounded-3xl border p-2 tech-luxury-outline ${isDark ? 'bg-secondary border-accent/30' : 'bg-white border-accent/30'} shadow-luxury-lg`}>
                <div className="aspect-3/4 rounded-2xl overflow-hidden">
                  <img
                    src="/images/zul.jpg"
                    alt="Zulfaqar Hafez"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                  <div className="absolute inset-0 scan-sheen"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center animate-bounce">
          <a href="#about" className="inline-flex items-center gap-2 accent-readable section-kicker">
            Scroll
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-5-5m5 5l5-5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
