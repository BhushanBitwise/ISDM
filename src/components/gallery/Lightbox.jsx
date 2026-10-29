import { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const item = items[currentIndex];

  // Focus management
  useEffect(() => {
    closeRef.current?.focus();
  }, [currentIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery: ${item.title}`}
      onClick={onClose}
    >
      <div
        className="lightbox-inner"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          ref={closeRef}
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={18} />
        </button>

        {/* Prev */}
        {items.length > 1 && (
          <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Image */}
        <img
          src={item.src}
          alt={item.alt}
          className="lightbox-img"
          loading="eager"
        />

        {/* Caption */}
        <div style={{textAlign:'center'}}>
          <p className="lightbox-title">{item.title}</p>
          {item.caption && <p className="lightbox-caption">{item.caption}</p>}
          {item.location && (
            <p style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.4)', marginTop:'0.25rem'}}>
              {item.location}
            </p>
          )}
        </div>

        {/* Counter */}
        {items.length > 1 && (
          <p style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.35)'}}>
            {currentIndex + 1} / {items.length}
          </p>
        )}

        {/* Next */}
        {items.length > 1 && (
          <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
