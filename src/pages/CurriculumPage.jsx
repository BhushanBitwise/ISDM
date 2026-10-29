import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import { curriculumModules } from '../data/curriculum';

function ModuleAccordion({ mod, isOpen, onToggle }) {
  return (
    <div className={`curriculum-module ${isOpen ? 'open' : ''}`} id={`module-${mod.number}`}>
      <button
        className="module-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`module-body-${mod.number}`}
      >
        <span className="module-num">MODULE {mod.number}</span>
        <span className="module-title">{mod.title}</span>
        <ChevronDown size={18} className="module-chevron" />
      </button>

      {isOpen && (
        <div className="module-body" id={`module-body-${mod.number}`} role="region">
          <p className="module-desc">{mod.description}</p>

          <p style={{fontSize:'0.75rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--c-text)', marginBottom:'0.75rem'}}>Topics Covered</p>
          <div className="module-topics" style={{marginBottom:'1.5rem'}}>
            {mod.topics.map((t) => (
              <div className="module-topic" key={t}>{t}</div>
            ))}
          </div>

          <p style={{fontSize:'0.75rem', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--c-text)', marginBottom:'0.75rem'}}>Learning Outcomes</p>
          <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem', marginBottom:'1.5rem'}}>
            {mod.outcomes.map((o) => (
              <li key={o} style={{fontSize:'0.875rem', color:'var(--c-text-sec)', display:'flex', gap:'0.625rem', alignItems:'flex-start', lineHeight:'1.6'}}>
                <span style={{color:'var(--c-cobalt)', flexShrink:0, fontWeight:'700'}}>✓</span> {o}
              </li>
            ))}
          </ul>

          <div style={{padding:'1rem 1.25rem', background:'var(--c-bg)', borderRadius:'0.625rem', border:'1px dashed var(--c-border)'}}>
            <p style={{fontSize:'0.75rem', fontWeight:'700', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--c-text-sec)', marginBottom:'0.375rem'}}>Practical Assignment</p>
            <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.65'}}>{mod.assignment}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CurriculumPage() {
  const [openModule, setOpenModule] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = curriculumModules.filter(mod => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q) ||
      mod.topics.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Curriculum' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            The <span className="serif-accent" style={{color:'var(--c-lime)'}}>Curriculum</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'560px', lineHeight:'1.7'}}>
            Twelve structured modules covering digital marketing from fundamentals to professional career preparation.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          {/* Search + stats */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'2rem', flexWrap:'wrap', marginBottom:'3rem'}}>
            <div className="stats-row" style={{flex:'1', minWidth:'300px', maxWidth:'600px'}}>
              <div className="stat-cell">
                <div className="stat-number">12</div>
                <div className="stat-label">Modules</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">100+</div>
                <div className="stat-label">Topics</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">12</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-cell">
                <div className="stat-number">6</div>
                <div className="stat-label">Programs</div>
              </div>
            </div>
            <div className="search-wrap" style={{flex:'1', maxWidth:'360px'}}>
              <Search size={16} className="search-icon" />
              <input
                type="search"
                className="search-input"
                placeholder="Search modules, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search curriculum topics"
              />
            </div>
          </div>

          {/* Modules */}
          {filtered.length > 0 ? (
            <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
              {filtered.map((mod) => (
                <ModuleAccordion
                  key={mod.id}
                  mod={mod}
                  isOpen={openModule === mod.id}
                  onToggle={() => setOpenModule(prev => prev === mod.id ? null : mod.id)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No modules match your search.</h3>
              <p>Try a different keyword — like "SEO", "content", "analytics", or "AI".</p>
            </div>
          )}

          {/* CTA */}
          <div style={{marginTop:'4rem', textAlign:'center', padding:'3rem', background:'var(--c-bg-dark)', borderRadius:'1.5rem'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.875rem', fontWeight:'700', color:'#fff', marginBottom:'1rem'}}>
              Ready to Start Learning?
            </h2>
            <p style={{color:'var(--c-text-dark)', marginBottom:'2rem'}}>
              Connect with our team to discuss which program and format works best for your goals.
            </p>
            <Link to="/contact" className="btn btn-lime-dark">
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
