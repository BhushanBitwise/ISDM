import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Breadcrumb navigation component.
 * @param {Array} items - Array of { label, href } objects.
 *                        The last item is the current page (no href needed).
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <ChevronRight size={12} className="breadcrumb-sep" />
          {item.href ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page" style={{ color: 'var(--c-text)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
