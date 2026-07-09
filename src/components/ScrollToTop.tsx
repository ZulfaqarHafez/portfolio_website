import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.pageYOffset > 400);
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((window.pageYOffset / max) * 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Progress hairline */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[70]" aria-hidden="true">
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${scrollProgress}%`, backgroundColor: 'var(--accent)' }}
        />
      </div>

      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-surface border b-strong t-ink flex items-center justify-center shadow-lg hover:t-accent hover:b-accent hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
