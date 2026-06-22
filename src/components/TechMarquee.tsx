import { useTheme } from '../contexts/ThemeContext';

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
 * A seamless, low-key band of core tools. Pauses on hover; static for
 * reduced-motion users (the CSS animation is removed via media query).
 */
const TechMarquee = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const loop = [...TOOLS, ...TOOLS];

  return (
    <div
      className={`relative border-y py-3 overflow-hidden ${
        isDark ? 'border-accent/15 bg-primary/40' : 'border-neutral-200 bg-white/40'
      }`}
      aria-hidden="true"
    >
      <div className="marquee-mask">
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          {loop.map((tool, idx) => (
            <span key={idx} className="flex items-center gap-8 shrink-0">
              <span
                className={`font-tech-mono text-xs uppercase tracking-[0.18em] ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {tool}
              </span>
              <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
