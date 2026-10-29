export default function MarqueeTicker({ items, dark = true, speed = '30s' }) {
  const defaultItems = [
    'LEARN DIGITAL',
    'THINK GLOBAL',
    'PERFORMANCE MARKETING',
    'AI-ASSISTED WORKFLOWS',
    'TECHNICAL SEO',
    'DATA & GA4 ANALYTICS',
    'PORTFOLIO FIRST',
    'PUNE · NAGPUR · SINGAPORE · GERMANY',
  ];

  const displayList = items || defaultItems;

  return (
    <div className={`marquee-container ${dark ? '' : 'bg-white'}`} aria-hidden="true">
      <div className="marquee-content" style={{ animationDuration: speed }}>
        {displayList.map((text, idx) => (
          <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <span>{text}</span>
            <span style={{ color: 'var(--c-lime)', fontSize: '1rem', textShadow: '0 0 12px rgba(213, 255, 63, 0.7)' }}>✦</span>
          </span>
        ))}
      </div>
      <div className="marquee-content" style={{ animationDuration: speed }}>
        {displayList.map((text, idx) => (
          <span key={`dup-${idx}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <span>{text}</span>
            <span style={{ color: 'var(--c-lime)', fontSize: '1rem', textShadow: '0 0 12px rgba(213, 255, 63, 0.7)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
