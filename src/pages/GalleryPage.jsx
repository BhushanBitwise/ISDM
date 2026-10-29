import { useState, useCallback } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import Lightbox from '../components/gallery/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (globalIndex) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() => {
    setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex(i => (i + 1) % filtered.length);
  }, [filtered.length]);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            ISDM in<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Focus.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            A closer look at the ISDM learning environment — campus, classrooms, student collaboration, workshops, and our global locations.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters" style={{marginBottom:'2.5rem'}}>
            {galleryCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p style={{fontSize:'0.8125rem', color:'var(--c-text-sec)', marginBottom:'1.5rem'}}>
            Showing {filtered.length} {filtered.length === 1 ? 'image' : 'images'}
            {activeCategory !== 'all' && ` in ${galleryCategories.find(c => c.id === activeCategory)?.label}`}
          </p>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => openLightbox(idx)}
                aria-label={`View: ${item.title}`}
                style={{all:'unset', cursor:'pointer'}}
                className="gallery-item"
              >
                <Img
                  src={item.src}
                  alt={item.alt}
                  style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s var(--ease-out)'}}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <p className="gallery-item-title">{item.title}</p>
                  {item.location && <p className="gallery-item-caption">{item.location}</p>}
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">🖼️</div>
              <h3>No images in this category.</h3>
              <p>Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
