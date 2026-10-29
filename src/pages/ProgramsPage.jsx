import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import programs from '../data/programs';
import { createWhatsAppLink } from '../utils/whatsapp';
import Img from '../components/common/Img';

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Programs' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            Explore <span className="serif-accent" style={{color:'var(--c-lime)'}}>Programs</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            Six focused programs covering the core disciplines of modern digital marketing — from SEO and content to performance advertising and AI-assisted workflows.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="programs-grid">
            {programs.map((prog) => (
              <article className="program-card" key={prog.id} aria-label={prog.title}>
                <div className="program-card-img">
                  <Img
                    src={prog.image}
                    alt={`${prog.title} program at ISDM`}
                    style={{width:'100%', height:'100%', objectFit:'cover'}}
                    loading="lazy"
                  />
                  <span className="program-card-num">PROGRAM {prog.number}</span>
                </div>
                <div className="program-card-body">
                  <h2 className="program-card-title">{prog.title}</h2>
                  <p className="program-card-desc">{prog.description}</p>
                  <div className="program-topics">
                    {prog.topics.map((t) => (
                      <span className="program-topic-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div>
                    <p style={{fontSize:'0.8125rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.5rem'}}>Ideal for:</p>
                    <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.25rem'}}>
                      {prog.audience.slice(0,2).map((a) => (
                        <li key={a} style={{fontSize:'0.8125rem', color:'var(--c-text-sec)', display:'flex', gap:'0.5rem', alignItems:'flex-start'}}>
                          <span style={{color:'var(--c-lime)', fontWeight:'700', flexShrink:0}}>→</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="program-card-footer">
                  <Link to={`/programs/${prog.slug}`} className="btn btn-dark" style={{fontSize:'0.8125rem', padding:'0.5rem 1.25rem'}}>
                    View Program
                  </Link>
                  <a
                    href={createWhatsAppLink(`Hello ISDM, I'm interested in the ${prog.title} program.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{fontSize:'0.75rem', padding:'0.4rem 0.875rem'}}
                    aria-label={`Enquire about ${prog.title}`}
                  >
                    <MessageCircle size={13} /> Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py section-dark">
        <div className="container" style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
          <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.25rem'}}>
            Not Sure Which Program<br />
            <span className="serif-accent" style={{color:'var(--c-lime)'}}>Is Right for You?</span>
          </h2>
          <p style={{color:'var(--c-text-dark)', lineHeight:'1.75', marginBottom:'2.5rem'}}>
            Connect with our team. We'll help you find the most suitable program based on your background, goals, and schedule.
          </p>
          <Link to="/contact" className="btn btn-lime-dark">
            Talk to an Advisor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
