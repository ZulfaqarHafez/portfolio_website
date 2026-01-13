import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI Engineer & Community Innovator';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80); // Typing speed: 80ms per character
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      // Wait 2 seconds at full text, then restart
      const restartTimeout = setTimeout(() => {
        setTypedText('');
        setIsTypingComplete(false);
      }, 2000);
      return () => clearTimeout(restartTimeout);
    }
  }, [typedText, fullText]);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 ${isDark ? 'bg-luxury-gradient' : 'bg-gradient-to-br from-white via-neutral-50 to-neutral-100'}`}>
      {/* Animated gradient mesh background - Reduced */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute top-10 left-5 w-48 h-48 rounded-full blur-3xl animate-blob-morph ${isDark ? 'bg-accent/20' : 'bg-accent/30'}`}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        ></div>
        <div
          className={`absolute bottom-10 right-5 w-64 h-64 rounded-full blur-3xl animate-blob-morph ${isDark ? 'bg-accent/10' : 'bg-accent/20'}`}
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s',
          }}
        ></div>
      </div>

      <div className="container-custom text-center relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Smaller */}
          <div className="mb-6 animate-scale-in animate-once">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gold-gradient rounded-full flex items-center justify-center shadow-luxury-lg border-4 border-accent hover:scale-110 transition-all duration-500 overflow-hidden">
              <img
                src="/images/zul.jpg"
                alt="Zulfaqar Hafez"
                className="w-full h-full object-cover hover:rotate-6 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Greeting */}
          <p className={`text-base md:text-lg mb-3 animate-fade-in-down animate-delay-200 animate-once font-light ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Hi there! I'm
          </p>

          {/* Name - Smaller */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 animate-fade-in-up animate-delay-300 animate-once tracking-tight ${isDark ? 'text-white' : 'text-primary'}`}>
            Zulfaqar Hafez
          </h1>

          {/* Title/Role with Typing Effect - Smaller */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-6 md:mb-8 animate-fade-in-up animate-delay-400 animate-once">
            <span className="inline-block">
              {typedText}
              <span className={`inline-block w-0.5 h-[0.8em] bg-accent ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : 'animate-blink'}`}></span>
            </span>
          </h2>

          {/* Description - Compact */}
          <p className={`text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-500 animate-once leading-relaxed font-light ${isDark ? 'text-neutral-200' : 'text-neutral-600'}`}>
            Leveraging AI and machine learning to solve real-world problems and transform community challenges into tech solutions.
          </p>

          {/* CTA Buttons - Smaller */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up animate-delay-600 animate-once">
            <a
              href="#projects"
              className="group px-6 py-3 bg-gold-gradient text-primary rounded-lg font-bold text-sm md:text-base hover:shadow-luxury-lg transition-all duration-300 shadow-luxury transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="/Zulf_Resume.pdf"
              download
              className={`group px-6 py-3 bg-transparent border-2 border-accent rounded-lg font-bold text-sm md:text-base hover:bg-accent hover:text-primary transition-all duration-300 shadow-luxury hover:shadow-luxury-lg transform hover:-translate-y-1 hover:scale-105 ${isDark ? 'text-white' : 'text-primary'}`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </a>
          </div>

          {/* Scroll Indicator - Removed or smaller */}
          <div className="mt-8 animate-bounce hidden md:block">
            <a href="#about" className="inline-block">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
