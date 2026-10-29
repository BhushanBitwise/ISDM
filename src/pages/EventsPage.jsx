import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import { events, eventCategories, hasPublishedEvents } from '../data/events';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const waLink = createWhatsAppLink(whatsappMessages.workshop);

  const filtered = activeCategory === 'all'
    ? events
    : events.filter(e => e.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <Img src="/images/09-workshop-seminar.webp" alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Events' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            Events &<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Masterclasses.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            Workshops, seminars, and intensive learning sessions covering AI in Marketing, SEO, Performance Marketing, Content Creation, and Analytics.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters" style={{marginBottom:'2.5rem'}}>
            {eventCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events or Empty State */}
          {hasPublishedEvents && filtered.length > 0 ? (
            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              {filtered.map(event => (
                <div className="event-card" key={event.id}>
                  <div className="event-date">
                    <div className="event-day">{new Date(event.date).getDate()}</div>
                    <div className="event-month">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                  <div className="event-body">
                    <div className="event-category">{event.category.toUpperCase()}</div>
                    <h3 className="event-title">{event.title}</h3>
                    <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.6', marginBottom:'0.75rem'}}>{event.description}</p>
                    <div className="event-meta">
                      <span><Calendar size={13} /> {event.time}</span>
                      <span><MapPin size={13} /> {event.location}</span>
                    </div>
                  </div>
                  {event.registrationOpen && (
                    <div style={{padding:'1.25rem', display:'flex', alignItems:'center'}}>
                      <Link to={event.registrationLink} className="btn btn-primary" style={{fontSize:'0.8125rem', padding:'0.5rem 1rem'}}>
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem', alignItems:'center'}}>
              <div>
                <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                  Coming Soon.<br /><span className="serif-accent">Stay Connected.</span>
                </h2>
                <p className="text-body" style={{marginBottom:'1.5rem'}}>
                  New workshops and learning sessions will be announced soon. Register your interest to be notified about upcoming events in AI in Marketing, SEO, Performance Marketing, Content Creation, and Analytics.
                </p>
                <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                  <Link to="/contact" className="btn btn-dark">
                    Register Interest <ArrowRight size={16} />
                  </Link>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
                <Img
                  src="/images/09-workshop-seminar.webp"
                  alt="ISDM workshop and seminar session"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Topic preview */}
      <section className="section-py" style={{background:'var(--c-bg)', borderTop:'1px solid var(--c-border)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>TOPICS WE COVER</p>
          <h2 className="heading-lg" style={{marginBottom:'2.5rem'}}>What You'll Learn in<br /><span className="serif-accent">Our Workshops.</span></h2>
          <div className="three-col">
            {[
              { title:'AI in Marketing', desc:'How generative AI tools are changing content creation, research workflows, campaign planning, and marketing measurement.' },
              { title:'SEO Masterclass', desc:'Keyword research, technical SEO, content strategy, and Search Console — an intensive session for SEO practitioners.' },
              { title:'Performance Marketing', desc:'Building full-funnel paid campaigns across Google and Meta with a focus on measurement and optimisation.' },
              { title:'Content Creation Lab', desc:'Hands-on content planning, copywriting, short-form video scripting, and creative brief development.' },
              { title:'Analytics & Reporting', desc:'GA4 fundamentals, UTM tracking, campaign attribution, and creating clear marketing performance reports.' },
              { title:'Social Media Strategy', desc:'Platform strategy, content calendars, community management, and analysing social media performance data.' },
            ].map((topic) => (
              <div key={topic.title} style={{padding:'1.5rem', border:'1px solid var(--c-border)', borderRadius:'1rem', background:'#fff'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.625rem'}}>{topic.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.65'}}>{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
