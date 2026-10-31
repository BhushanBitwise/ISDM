import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, X, Phone, MessageCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import navigation from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';
import { createWhatsAppLink, whatsappMessages } from '../../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedDrawerSection, setExpandedDrawerSection] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [drawerOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const whatsappHref = createWhatsAppLink(whatsappMessages.general);

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR ───────────────────────────────── */}
      <div className="announcement-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span className="pulse-dot-lime" style={{ width: '6px', height: '6px' }} />
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Admissions & Program Enquiries 2025–26 — Pune · US · UK · Singapore · Germany Hubs</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ── MAIN NAVBAR ────────────────────────────────────────── */}
      <header
        ref={navRef}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="banner"
      >
        <div className="container navbar-inner">

          {/* Brand Mark with Global Hub Badge */}
          <div className="navbar-brand-wrap">
            <Link to="/" className="navbar-logo" aria-label="ISDM — International School of Digital Marketing">
              ISD<span>M</span>
            </Link>
            <div className="navbar-brand-pill" title="Active International Learning Centers">
              <span className="pulse-dot-lime" style={{ width: '5px', height: '5px' }} />
              <span>Global Hub</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav aria-label="Main navigation">
            <ul className="navbar-nav">
              {navigation.map((item) => (
                <li key={item.label} className={openDropdown === item.label ? 'dropdown-open' : ''}>
                  {item.dropdown ? (
                    <button
                      className={`nav-link ${location.pathname.startsWith(item.href) ? 'active' : ''}`}
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="nav-chevron" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* Rich Dropdowns */}
                  {item.dropdown && item.label === 'Programs' && (
                    <div className="nav-dropdown nav-dropdown-wide" role="menu">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.25rem' }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="nav-dropdown-item-rich"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="item-title">
                              <span>{sub.label}</span>
                              <span className="dropdown-num">{sub.number}</span>
                            </div>
                            <span className="item-sub">
                              {sub.number === '01' && 'Full-Stack Digital Strategy & Execution'}
                              {sub.number === '02' && 'Google Ads, Meta Ads & ROAS Optimization'}
                              {sub.number === '03' && 'Technical SEO, Search Console & Architecture'}
                              {sub.number === '04' && 'Content Direction & High-Impact Copywriting'}
                              {sub.number === '05' && 'Generative AI & LLM Automation Workflows'}
                              {sub.number === '06' && 'High-Yield Local SEO & Inbound Lead Engines'}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/curriculum"
                        className="nav-dropdown-footer"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>📚 Explore Complete 12-Module Curriculum</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}

                  {item.dropdown && item.label === 'Locations' && (
                    <div className="nav-dropdown" style={{ minWidth: '300px', padding: '0.65rem' }} role="menu">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="dropdown-item"
                            role="menuitem"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem' }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div>
                              <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--c-text)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <MapPin size={13} style={{ color: 'var(--c-cobalt)' }} />
                                {sub.label}
                              </p>
                              <p style={{ fontSize: '0.75rem', color: 'var(--c-text-sec)', marginTop: '0.1rem' }}>
                                {sub.region}
                              </p>
                            </div>
                            <span style={{ fontSize: '0.6875rem', color: '#16a34a', background: '#dcfce7', padding: '0.2rem 0.5rem', borderRadius: '9999px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#16a34a' }} />
                              Open
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/locations"
                        className="nav-dropdown-footer"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>🌍 View All Global Learning Hubs</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Action Bar */}
          <div className="navbar-actions navbar-desktop-actions">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-whatsapp"
              title="Chat directly with an Admissions Officer on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
            <NavLink
              to="/programs"
              className="btn btn-lime-dark"
              style={{ borderRadius: '9999px', padding: '0.55rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600 }}
            >
              <span>Explore Programs</span>
              <ArrowRight size={14} />
            </NavLink>
          </div>

          {/* Hamburger Toggle */}
          <button
            className={`hamburger ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Out Drawer */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-header">
          <Link to="/" className="navbar-logo" onClick={() => setDrawerOpen(false)}>
            ISD<span style={{ color: 'var(--c-cobalt)' }}>M</span>
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            style={{ padding: '0.5rem', borderRadius: '0.5rem', color: 'var(--c-text-sec)' }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-nav">
          {navigation.map((item, idx) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    className="drawer-link"
                    style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    onClick={() => setExpandedDrawerSection(prev => prev === item.label ? null : item.label)}
                  >
                    <span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--c-lime)', marginRight: '0.5rem', fontFamily: 'monospace' }}>
                        0{idx + 1}
                      </span>
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.2s ease',
                        transform: expandedDrawerSection === item.label ? 'rotate(180deg)' : 'none',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {expandedDrawerSection === item.label && (
                    <div className="drawer-subnav">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.href} to={sub.href} className="drawer-sublink" onClick={() => setDrawerOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.href} className="drawer-link" onClick={() => setDrawerOpen(false)}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--c-lime)', marginRight: '0.5rem', fontFamily: 'monospace' }}>
                    0{idx + 1}
                  </span>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>
            <span style={{ fontSize: '0.75rem', color: 'var(--c-lime)', marginRight: '0.5rem', fontFamily: 'monospace' }}>
              0{navigation.length + 1}
            </span>
            Contact & Enquiry
          </Link>
        </div>

        <div className="drawer-footer">
          <Link to="/programs" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setDrawerOpen(false)}>
            Explore All Programs
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <MessageCircle size={16} />
            Chat on WhatsApp (+91 8080152238)
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.75rem 0' }}>
            {siteConfig.contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--c-text-sec)' }}>
                <Phone size={13} /> {p.label}: {p.number}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
