export default function MarqueeTicker({ items, dark = true, speed = '32s' }) {
  const defaultItems = [
    'LEARN DIGITAL',
    'THINK GLOBAL',
    'PERFORMANCE MARKETING',
    'AI-ASSISTED WORKFLOWS',
    'TECHNICAL SEO',
    'DATA & GA4 ANALYTICS',
    'PORTFOLIO FIRST',
    'PUNE · US · UK · SINGAPORE · GERMANY',
  ];

  const displayList = items || defaultItems;

  return (
    <div className={`marquee-container ${dark ? '' : 'bg-white'}`} aria-hidden="true">
      <div className="marquee-track" style={{ animationDuration: speed }}>
        <div className="marquee-content">
          {displayList.concat(displayList).map((text, idx) => (
            <span key={`a-${idx}`} className="marquee-item">
              <span>{text}</span>
              <span className="marquee-bullet">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {displayList.concat(displayList).map((text, idx) => (
            <span key={`b-${idx}`} className="marquee-item">
              <span>{text}</span>
              <span className="marquee-bullet">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
