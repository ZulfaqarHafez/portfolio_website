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

const TechMarquee = () => {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <div className="relative border-y b-line bg-deep py-4 overflow-hidden" aria-hidden="true">
      <div className="marquee-mask">
        <div className="marquee-track flex w-max items-center gap-9 pr-9">
          {loop.map((tool, idx) => (
            <span key={idx} className="flex items-center gap-9 shrink-0">
              <span className="font-mono2 text-xs uppercase tracking-[0.18em] t-faint">
                {tool}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-solid opacity-60 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
