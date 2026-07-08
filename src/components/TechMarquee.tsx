const TOOLS = [
  'PyTorch',
  'TensorFlow',
  'Transformers',
  'YOLOv8',
  'Mediapipe',
  'LangChain',
  'FastAPI',
  'Next.js',
  'Supabase',
  'PySpark',
  'Hugging Face',
  'Gemini',
  'scikit-learn',
  'PostgreSQL',
];

/**
 * Materials & components strip. Pauses on hover; static for reduced motion.
 */
const TechMarquee = () => {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <div className="relative border-y b-strong bg-paper-deep py-3 overflow-hidden" aria-hidden="true">
      <div className="marquee-mask">
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          <span className="annot t-accent shrink-0">Materials &amp; components ·</span>
          {loop.map((tool, idx) => (
            <span key={idx} className="flex items-center gap-8 shrink-0">
              <span className="annot t-faint">
                {String((idx % TOOLS.length) + 1).padStart(2, '0')} {tool}
              </span>
              <span className="w-1 h-1 bg-accent-solid opacity-50 shrink-0 rotate-45" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
