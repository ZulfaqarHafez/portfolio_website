import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((window.pageYOffset / windowHeight) * 100);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress hairline */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]" aria-hidden="true">
        <div
          className="h-full transition-all duration-200"
          style={{ width: `${scrollProgress}%`, backgroundColor: 'var(--accent)' }}
        />
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-11 h-11 bg-raised border b-strong t-ink flex items-center justify-center shadow-md hover:t-accent hover:b-accent hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
