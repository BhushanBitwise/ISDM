import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Play, MapPin, Calendar, ChevronDown,
  MessageCircle, Zap, Globe, BookOpen, TrendingUp,
  Users, Cpu, Award, Plus, Minus, ChevronRight
} from 'lucide-react';
import Img from '../components/common/Img';
import Lightbox from '../components/gallery/Lightbox';
import MarqueeTicker from '../components/common/MarqueeTicker';
import { siteConfig } from '../data/siteConfig';
import programs from '../data/programs';
import { curriculumOverview } from '../data/curriculum';
import locations, { getLocationStatusLabel, getLocationStatusColor } from '../data/locations';
import { galleryItems } from '../data/gallery';
import faqs from '../data/faqs';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

// ─── SUBCOMPONENTS ────────────────────────────────────────────

function SectionLabel({ number, text }) {
  return (
    <div className="section-label-wrap" style={{ marginBottom: '1.25rem' }}>
      <span className="section-label-num">{number}</span>
      <span className="section-label-divider">/</span>
      <span className="section-label-text">{text}</span>
    </div>
  );
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-trigger-${item.id}`}
        aria-controls={`faq-body-${item.id}`}
      >
        <span>{item.question}</span>
        <span className="faq-icon" aria-hidden="true"><Plus size={14} /></span>
      </button>
      <div
        className="faq-body"
        id={`faq-body-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
      >
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

// ─── HOMEPAGE ─────────────────────────────────────────────────

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % galleryItems.length);

  // GSAP Hero Animation
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-line-1', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
        .from('.hero-line-2', { opacity: 0, y: 30, duration: 0.7 }, '-=0.5')
        .from('.hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
        .from('.hero-support', { opacity: 0, duration: 0.4 }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  // Scroll Triggers
  useEffect(() => {
    if (prefersReduced) return;
    // On mobile devices (<= 768px), keep elements immediately visible to prevent touch scroll clipping
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.scroll-reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('.stagger-children').forEach((parent) => {
        const children = parent.querySelectorAll(':scope > *');
        gsap.from(children, {
          opacity: 0,
          y: 25,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
            once: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, [prefersReduced]);

  const waLink = createWhatsAppLink(whatsappMessages.general);
  const previewGallery = galleryItems.slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" ref={heroRef} aria-label="Hero">
        <div className="hero-bg">
          <Img
            src={siteConfig.hero.heroImage}
            alt="ISDM campus — modern digital marketing education environment"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-pill-wrap">
              <span className="award-pill award-pill-dark">
                <span className="pulse-dot-lime" />
                <span>Admissions Open 2025–26 · Pune · US · UK · Singapore · Germany</span>
              </span>
            </div>
            <p className="hero-eyebrow">
              <span style={{ display: 'inline-block', width: '22px', height: '2px', background: 'var(--c-lime)', verticalAlign: 'middle', marginRight: '0.4rem' }} />
              {siteConfig.hero.eyebrow}
            </p>
            <h1 className="hero-headline">
              <span className="hero-line-1">{siteConfig.hero.headline1}</span>
              <br />
              <span className="hero-line-2">
                Make It <span className="serif-word">Remarkable.</span>
              </span>
            </h1>
            <p className="hero-body">{siteConfig.hero.subheading}</p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn-lime-dark">
                {siteConfig.hero.cta1.label}
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="hero-btn-secondary">
                Talk to an Advisor
              </Link>
            </div>
            <p className="hero-support">
              <span className="support-star">✦</span>
              <span>{siteConfig.hero.supportingLine}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── IMPACT METRICS STRIP ──────────────────────────────── */}
      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-box metric-box-blue">
              <p className="metric-value metric-value-blue">12</p>
              <p className="metric-label">In-Depth Curriculum Modules</p>
            </div>
            <div className="metric-box metric-box-cobalt">
              <p className="metric-value metric-value-cobalt">5 Hubs</p>
              <p className="metric-label">Pune · US · UK · Singapore · Germany</p>
            </div>
            <div className="metric-box metric-box-emerald">
              <p className="metric-value metric-value-emerald">100%</p>
              <p className="metric-label">Hands-on Campaign Portfolios</p>
            </div>
            <div className="metric-box metric-box-violet">
              <p className="metric-value metric-value-violet">AI-Native</p>
              <p className="metric-label">Generative AI & LLM Workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KINETIC RUNNING MARQUEE ─────────────────────────── */}
      <MarqueeTicker speed="30s" />

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="section-py" aria-label="The ISDM Approach" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="scroll-reveal" style={{marginBottom:'4rem'}}>
            <SectionLabel number="01" text="THE ISDM APPROACH" />
            <h2 className="heading-xl" style={{maxWidth:'680px', marginBottom:'1.5rem'}}>
              Marketing Is Changing.<br />
              <span className="serif-accent">The Way We Learn</span> Should Too.
            </h2>
            <p className="text-lead" style={{maxWidth:'600px'}}>
              Digital marketing combines creativity, technology, audience understanding, and measurable business outcomes. ISDM's proposed learning approach brings these disciplines together through structured lessons, practical exercises, and portfolio-oriented projects.
            </p>
          </div>

          <div className="features-grid scroll-reveal">
            {[
              {
                num: '01',
                title: 'Think Strategically',
                desc: 'Understand audiences, positioning, campaign objectives, and customer journeys before building anything.',
                icon: TrendingUp,
              },
              {
                num: '02',
                title: 'Build Practically',
                desc: 'Explore campaign concepts, content plans, website exercises, and analytics scenarios with hands-on work.',
                icon: Zap,
              },
              {
                num: '03',
                title: 'Measure What Matters',
                desc: 'Learn to interpret performance indicators and make informed marketing decisions with real data.',
                icon: Award,
              },
            ].map((f) => (
              <div className="feature-cell" key={f.num}>
                <div className="feature-num">{f.num}</div>
                <f.icon size={24} style={{color:'var(--c-cobalt)', marginBottom:'0.875rem'}} />
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="section-py" aria-label="Programs" style={{background:'var(--c-bg)', borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="section-header-flex scroll-reveal">
            <div>
              <SectionLabel number="02" text="EXPLORE PROGRAMS" />
              <h2 className="heading-xl">Find Your Place in<br />the Digital Economy.</h2>
            </div>
            <Link to="/programs" className="btn btn-outline" style={{flexShrink:0}}>
              All Programs <ArrowRight size={15} />
            </Link>
          </div>

          <div className="programs-grid stagger-children" style={{marginTop:'3rem'}}>
            {programs.map((prog) => (
              <article className="program-card" key={prog.id} aria-label={prog.title}>
                <div className="program-card-img">
                  <Img
                    src={prog.image}
                    alt={`${prog.title} — ISDM program`}
                    style={{width:'100%', height:'100%', objectFit:'cover'}}
                    loading="lazy"
                  />
                  <span className="program-card-num">PROGRAM {prog.number}</span>
                </div>
                <div className="program-card-body">
                  <h3 className="program-card-title">{prog.title}</h3>
                  <p className="program-card-desc">{prog.description}</p>
                  <div className="program-topics">
                    {prog.topics.slice(0, 4).map((t) => (
                      <span className="program-topic-tag" key={t}>{t}</span>
                    ))}
                    {prog.topics.length > 4 && (
                      <span className="program-topic-tag">+{prog.topics.length - 4} more</span>
                    )}
                  </div>
                </div>
                <div className="program-card-footer">
                  <Link to={`/programs/${prog.slug}`} className="link-arrow">
                    View Program <ArrowRight size={14} />
                  </Link>
                  <a
                    href={createWhatsAppLink(whatsappMessages.program(prog.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{padding:'0.4rem 0.875rem', fontSize:'0.75rem'}}
                    aria-label={`Enquire about ${prog.title} on WhatsApp`}
                  >
                    <MessageCircle size={13} /> Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM PREVIEW ────────────────────────────────── */}
      <section className="section-py" aria-label="Learning Path" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="scroll-reveal">
                <SectionLabel number="03" text="LEARNING PATH" />
                <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                  A Clear Path From<br />
                  <span className="serif-accent">Fundamentals</span> to Execution.
                </h2>
                <p className="text-lead" style={{marginBottom:'2.5rem'}}>
                  Twelve structured modules take you from marketing principles to practical campaign work, analytics, and professional career preparation.
                </p>
                <Link to="/curriculum" className="btn btn-dark">
                  Explore Full Curriculum <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div>
              <div className="timeline scroll-reveal">
                {curriculumOverview.map((mod) => (
                  <div className="timeline-item" key={mod.number}>
                    <div className="timeline-num">Module {mod.number}</div>
                    <div className="timeline-title">{mod.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICAL LEARNING ───────────────────────────────── */}
      <section className="section-py section-dark" aria-label="Learn by Doing">
        <div className="container">
          <div className="two-col learn-by-doing-grid">
            <div className="sticky-img scroll-reveal">
              <Img
                src="/images/02-classroom-training.png.webp"
                alt="ISDM students in a hands-on digital marketing training session"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
                loading="lazy"
              />
            </div>
            <div>
              <SectionLabel number="04" text="LEARN BY DOING" />
              <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.5rem'}}>
                Move Beyond Tutorials.<br />
                <span className="serif-accent" style={{color:'var(--c-lime)'}}>Start Building.</span>
              </h2>
              <p style={{color:'var(--c-text-dark)', lineHeight:'1.75', marginBottom:'2.5rem', fontSize:'1rem'}}>
                Every program includes practical exercises based on realistic marketing scenarios. You'll work through projects that build genuine skills and a portfolio of work.
              </p>
              <div className="stagger-children" style={{display:'flex', flexDirection:'column', gap:'1.25rem'}}>
                {[
                  { title: 'SEO Audit', desc: 'Audit a demonstration website and identify improvement opportunities across technical, on-page, and content dimensions.' },
                  { title: 'Social Media Campaign', desc: 'Develop a content calendar, creative direction, and measurement plan for a sample brand across two platforms.' },
                  { title: 'Advertising Strategy', desc: 'Create a sample paid campaign plan with defined objectives, audience strategy, and a reporting framework.' },
                  { title: 'AI Marketing Workflow', desc: 'Combine AI-assisted research, content drafting, human review, and performance analysis into a documented workflow.' },
                ].map((p, i) => (
                  <div key={i} className="practical-card">
                    <h3 className="practical-card-title">
                      <span className="practical-card-bullet">✦</span>
                      <span>{p.title}</span>
                    </h3>
                    <p className="practical-card-desc">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ISDM ─────────────────────────────────────────── */}
      <section className="section-py" aria-label="Why ISDM" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="scroll-reveal" style={{textAlign:'center', maxWidth:'640px', margin:'0 auto 4rem'}}>
            <SectionLabel number="05" text="WHY THIS APPROACH" />
            <h2 className="heading-xl">
              Skills That Connect<br />
              <span className="serif-accent">Creativity, Strategy,</span> and Technology.
            </h2>
          </div>

          <div className="features-grid stagger-children">
            {[
              { num:'01', title:'Practical Project-Based Learning', desc:'Every module includes real-scenario assignments that build a portfolio of actual marketing work.' },
              { num:'02', title:'AI-Aware Marketing Education', desc:'Generative AI tools are explored thoughtfully — including how to use them responsibly and verify their outputs.' },
              { num:'03', title:'Multi-Channel Marketing Fundamentals', desc:'From organic SEO to paid advertising and social media — understand how channels complement each other.' },
              { num:'04', title:'Portfolio Development', desc:'Build documented case studies, reports, and campaign materials that demonstrate your capabilities.' },
              { num:'05', title:'Analytics and Measurement', desc:'Learn to read, interpret, and act on data — not just collect it. Make informed marketing decisions.' },
              { num:'06', title:'Career and Freelancing Preparation', desc:'Resume writing, LinkedIn profiles, client communication, and interview skills are part of the curriculum.' },
            ].map((f) => (
              <div className="feature-cell" key={f.num}>
                <div className="feature-num">{f.num}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING EXPERIENCE ──────────────────────────────── */}
      <section className="section-py" aria-label="Learning Experience" style={{background:'var(--c-bg-dark)', borderBottom:'1px solid var(--c-border-dark)'}}>
        <div className="container">
          <div className="scroll-reveal" style={{marginBottom:'3rem'}}>
            <SectionLabel number="06A" text="LEARNING ENVIRONMENT" />
            <h2 className="heading-xl" style={{color:'#fff', maxWidth:'600px'}}>
              A Learning Environment<br />
              <span className="serif-accent" style={{color:'var(--c-lime)'}}>Built for Practice.</span>
            </h2>
          </div>
          <div className="learning-env-grid stagger-children">
            {[
              { src:'/images/08-student-collaboration.webp', label:'Student Collaboration', cap:'Peer projects and marketing discussions' },
              { src:'/images/09-workshop-seminar.webp', label:'Workshops & Seminars', cap:'Expert-led learning sessions' },
              { src:'/images/10-student-community.webp', label:'Community', cap:'Better ideas start with better collaboration' },
            ].map((img, i) => (
              <div key={i} className="learning-env-card">
                <Img
                  src={img.src}
                  alt={img.label}
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
                <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(21,21,21,0.85) 0%, rgba(21,21,21,0.2) 60%, transparent 100%)'}}>
                  <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'1.25rem'}}>
                    <p style={{fontFamily:'var(--font-display)', fontWeight:'600', fontSize:'0.9375rem', color:'#fff'}}>{img.label}</p>
                    <p style={{fontSize:'0.8125rem', color:'rgba(255,255,255,0.7)', marginTop:'0.2rem', lineHeight:'1.5'}}>{img.cap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'2.5rem'}} className="scroll-reveal">
            <Link to="/learning-experience" className="btn btn-outline" style={{borderColor:'var(--c-border-dark)', color:'var(--c-text-dark)'}}>
              See How Learning Works <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ────────────────────────────────────────── */}
      <section className="section-py" aria-label="Locations" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="scroll-reveal" style={{marginBottom:'3rem'}}>
            <SectionLabel number="06" text="OUR LOCATIONS" />
            <h2 className="heading-xl">
              Local Learning.<br />
              <span className="serif-accent">Global Perspective.</span>
            </h2>
          </div>
          <div className="locations-grid stagger-children">
            {locations.map((loc) => {
              const statusColor = getLocationStatusColor(loc.status);
              const statusLabel = getLocationStatusLabel(loc.status);
              return (
                <Link
                  to={`/locations/${loc.slug}`}
                  key={loc.id}
                  className="location-card-premium"
                  aria-label={`${loc.city} campus location — ${statusLabel}`}
                >
                  {/* Top Image Preview Banner */}
                  <div className="loc-card-media">
                    <Img
                      src={loc.image}
                      alt={`${loc.city}, ${loc.country} — ISDM campus`}
                      className="loc-card-img"
                      loading="lazy"
                    />
                    <div className="loc-card-overlay" aria-hidden="true" />
                    
                    {/* Top Badges Floating Over Image */}
                    <div className="loc-card-top-badges">
                      <span className="loc-status-pill" style={{ borderColor: `${statusColor}55`, color: statusColor }}>
                        <span className="loc-status-glow-dot" style={{ background: statusColor, boxShadow: `0 0 8px ${statusColor}` }} />
                        {statusLabel}
                      </span>
                      {loc.hubCode && (
                        <span className="loc-hub-pill">
                          {loc.hubCode}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Clean Structured Content Body Below */}
                  <div className="loc-card-body">
                    <div className="loc-card-header-row">
                      <div>
                        <h3 className="loc-card-city">{loc.city}</h3>
                        <p className="loc-card-region">
                          <MapPin size={13} className="loc-pin-icon" />
                          <span>{loc.region || loc.country}</span>
                        </p>
                      </div>
                      {loc.timezone && (
                        <span className="loc-tz-badge" title="Local Timezone">
                          {loc.timezone}
                        </span>
                      )}
                    </div>

                    <p className="loc-card-desc">
                      {loc.intro}
                    </p>

                    <div className="loc-card-footer">
                      <span className="loc-card-tag">
                        {loc.programs?.length || 4} Programs
                      </span>
                      <span className="loc-card-cta">
                        Explore Hub <ArrowRight size={14} className="loc-cta-arrow" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────────────────────── */}
      <section className="section-py" aria-label="Student Community" style={{background:'var(--c-bg)', borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div className="scroll-reveal">
              <SectionLabel number="07" text="COMMUNITY" />
              <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                Better Ideas Start With<br />
                <span className="serif-accent">Better Collaboration.</span>
              </h2>
              <p className="text-lead" style={{marginBottom:'2rem'}}>
                Learning alongside others who are working through the same challenges creates a richer experience. Collaborative projects, peer feedback, and group discussions are part of the ISDM approach.
              </p>
              <Link to="/learning-experience" className="link-arrow">
                Learn about the experience <ArrowRight size={14} />
              </Link>
            </div>
            <div className="scroll-reveal">
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
                <Img
                  src="/images/08-student-collaboration.webp"
                  alt="ISDM students working together on a collaborative digital marketing project"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────────── */}
      <section className="section-py" aria-label="Events and Workshops" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="section-header-flex scroll-reveal">
            <div>
              <SectionLabel number="08" text="EVENTS & MASTERCLASSES" />
              <h2 className="heading-xl">Learn What's Next.</h2>
            </div>
            <Link to="/events" className="btn btn-outline" style={{flexShrink:0}}>
              All Events <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{marginTop:'3rem'}} className="scroll-reveal">
            <div className="events-featured-banner">
              <Img
                src="/images/09-workshop-seminar.webp"
                alt="ISDM workshop and seminar session"
                className="events-banner-bg"
                loading="lazy"
              />
              <div className="events-banner-overlay" aria-hidden="true" />
              <div className="events-banner-content">
                <span className="events-upcoming-pill">
                  <span className="pulse-dot-lime" style={{width:'5px', height:'5px'}} />
                  UPCOMING SESSIONS
                </span>
                <h3 className="events-banner-title">
                  New workshops and learning sessions will be announced soon.
                </h3>
                <p className="events-banner-desc">
                  Stay connected to hear about AI in Marketing, SEO Masterclasses, Performance Marketing Workshops, and Content Creation Labs.
                </p>
                <div>
                  <Link to="/contact" className="btn btn-lime-dark">
                    Register Interest <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREERS ──────────────────────────────────────────── */}
      <section className="section-py section-dark" aria-label="Career Development">
        <div className="container">
          <div className="two-col">
            <div>
              <SectionLabel number="09" text="CAREER DEVELOPMENT" />
              <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.5rem'}}>
                Prepare for the Work<br />
                <span className="serif-accent" style={{color:'var(--c-lime)'}}>Behind the Results.</span>
              </h2>
              <p style={{color:'var(--c-text-dark)', lineHeight:'1.75', marginBottom:'2.5rem', fontSize:'1rem'}}>
                The final curriculum module covers professional development — portfolio building, personal branding, client communication, and interview preparation. Because skills are only valuable when you can present them.
              </p>
              <div className="career-skills-grid stagger-children">
                {['Portfolio Development', 'Resume Preparation', 'Interview Practice', 'Freelancing Fundamentals', 'Client Communication', 'Campaign Presentation'].map((item) => (
                  <div key={item} className="career-skill-item">
                    <span className="career-skill-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/careers" className="btn btn-lime-dark">
                Career Preparation <ArrowRight size={16} />
              </Link>
            </div>
            <div className="scroll-reveal">
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'3/4'}}>
                <Img
                  src="/images/10-student-community.webp"
                  alt="ISDM students preparing for their marketing careers"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ──────────────────────────────────── */}
      <section className="section-py" aria-label="Gallery Preview" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="section-header-flex scroll-reveal">
            <div>
              <SectionLabel number="10" text="ISDM IN FOCUS" />
              <h2 className="heading-xl">A Closer Look at the<br /><span className="serif-accent">Learning Experience.</span></h2>
            </div>
            <Link to="/gallery" className="btn btn-outline" style={{flexShrink:0}}>
              Full Gallery <ArrowRight size={15} />
            </Link>
          </div>

          <div className="gallery-grid stagger-children" style={{marginTop:'3rem'}}>
            {previewGallery.map((item, idx) => (
              <button
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(idx)}
                aria-label={`View: ${item.title}`}
                style={{all:'unset', cursor:'pointer', display:'block', position:'relative', borderRadius:'0.875rem', overflow:'hidden', aspectRatio:'4/3', background:'var(--c-border)'}}
              >
                <Img
                  src={item.src}
                  alt={item.alt}
                  style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s var(--ease-out)'}}
                  className="img-zoom"
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <p className="gallery-item-title">{item.title}</p>
                  {item.caption && <p className="gallery-item-caption">{item.caption}</p>}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-py" aria-label="Frequently Asked Questions" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div className="scroll-reveal">
              <SectionLabel number="11" text="FAQ" />
              <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                Questions<br /><span className="serif-accent">Answered.</span>
              </h2>
              <p className="text-lead" style={{marginBottom:'2rem'}}>
                Can't find your answer here? Contact our team directly.
              </p>
              <Link to="/contact" className="btn btn-dark">
                Contact ISDM <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              {faqs.map((faq) => (
                <FaqItem key={faq.id} item={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section-py section-dark" aria-label="Call to Action">
        <div className="container" style={{textAlign:'center', maxWidth:'700px', margin:'0 auto'}}>
          <div className="scroll-reveal">
            <SectionLabel number="12" text="GET STARTED" />
            <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.25rem'}}>
              Your Next Chapter Starts With<br />
              <span className="serif-accent" style={{color:'var(--c-lime)'}}>One Conversation.</span>
            </h2>
            <p style={{color:'var(--c-text-dark)', fontSize:'1.0625rem', lineHeight:'1.75', marginBottom:'2.5rem'}}>
              Tell us what you want to learn, and our team can help you explore the available learning options.
            </p>
            <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
              <Link to="/programs" className="btn btn-lime-dark">
                Explore Programs <ArrowRight size={16} />
              </Link>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={previewGallery}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
