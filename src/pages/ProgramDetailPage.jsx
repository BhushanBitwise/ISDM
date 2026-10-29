import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import EnquiryForm from '../components/forms/EnquiryForm';
import Img from '../components/common/Img';
import programs from '../data/programs';
import { curriculumModules } from '../data/curriculum';
import faqs from '../data/faqs';
import { createWhatsAppLink } from '../utils/whatsapp';
import { useState } from 'react';
import { Plus } from 'lucide-react';

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{item.question}</span>
        <span className="faq-icon" aria-hidden="true"><Plus size={14} /></span>
      </button>
      <div className={`faq-body`}>
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function ProgramDetailPage() {
  const { slug } = useParams();
  const program = programs.find(p => p.slug === slug);

  if (!program) return <Navigate to="/404" replace />;

  const relatedModules = curriculumModules.filter(m => program.modules.includes(m.number));
  const relatedPrograms = programs.filter(p => p.id !== program.id).slice(0, 3);
  const programFaqs = faqs.slice(0, 5);
  const waLink = createWhatsAppLink(`Hello ISDM, I am interested in learning more about the ${program.title} program.`);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{minHeight:'60vh', display:'flex', alignItems:'center'}}>
        <div className="page-hero-bg" aria-hidden="true">
          <Img src={program.image} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} loading="eager" />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[
            { label: 'Programs', href: '/programs' },
            { label: program.title }
          ]} />
          <span className="section-label" style={{color:'var(--c-lime)', marginTop:'1rem', display:'block'}}>PROGRAM {program.number}</span>
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem', maxWidth:'600px'}}>
            {program.title}
          </h1>
          <p style={{color:'rgba(255,255,255,0.75)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7', marginBottom:'2rem'}}>
            {program.description}
          </p>
          <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <a href="#enquire" className="btn btn-lime-dark">
              Enquire About This Program <ArrowRight size={16} />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>WHO THIS IS FOR</p>
              <h2 className="heading-lg" style={{marginBottom:'1.5rem'}}>Is This Program<br /><span className="serif-accent">Right for You?</span></h2>
              <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem'}}>
                {program.audience.map((a) => (
                  <li key={a} style={{display:'flex', gap:'0.75rem', alignItems:'flex-start', fontSize:'0.9375rem', color:'var(--c-text-sec)'}}>
                    <span style={{color:'var(--c-lime)', fontWeight:'700', fontSize:'1rem', flexShrink:0, lineHeight:'1.4'}}>→</span>
                    {a}
                  </li>
                ))}
              </ul>

              <p className="section-label" style={{marginBottom:'1rem'}}>WHAT YOU'LL LEARN</p>
              <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                {program.outcomes.map((o) => (
                  <li key={o} style={{display:'flex', gap:'0.75rem', alignItems:'flex-start', fontSize:'0.9375rem', color:'var(--c-text-sec)'}}>
                    <span style={{width:'6px', height:'6px', borderRadius:'50%', background:'var(--c-cobalt)', flexShrink:0, marginTop:'0.45rem'}} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>TOPICS COVERED</p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.5rem', marginBottom:'2rem'}}>
                {program.topics.map((t) => (
                  <div key={t} style={{padding:'0.625rem 0.875rem', border:'1px solid var(--c-border)', borderRadius:'0.5rem', fontSize:'0.8125rem', color:'var(--c-text-sec)', fontWeight:'500'}}>
                    {t}
                  </div>
                ))}
              </div>
              <p className="section-label" style={{marginBottom:'1rem'}}>PRACTICAL PROJECTS</p>
              <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                {program.projects.map((proj) => (
                  <div key={proj.title} style={{padding:'1.25rem', background:'var(--c-bg)', border:'1px solid var(--c-border)', borderRadius:'0.875rem'}}>
                    <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.9375rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.5rem'}}>{proj.title}</h3>
                    <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.65'}}>{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="section-py" style={{background:'var(--c-bg)', borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>CURRICULUM MODULES</p>
          <h2 className="heading-lg" style={{marginBottom:'2.5rem', maxWidth:'480px'}}>
            What This Program<br /><span className="serif-accent">Covers.</span>
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
            {relatedModules.map((mod) => (
              <div key={mod.id} style={{padding:'1.25rem 1.5rem', background:'#fff', border:'1px solid var(--c-border)', borderRadius:'0.875rem', display:'flex', gap:'1.25rem', alignItems:'flex-start'}}>
                <span style={{fontFamily:'var(--font-display)', fontSize:'0.75rem', fontWeight:'700', letterSpacing:'0.06em', color:'var(--c-text-dark)', minWidth:'2.5rem'}}>
                  {mod.number}
                </span>
                <div>
                  <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.9375rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.375rem'}}>{mod.title}</h3>
                  <p style={{fontSize:'0.8125rem', color:'var(--c-text-sec)', lineHeight:'1.6'}}>{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:'2rem', textAlign:'center'}}>
            <Link to="/curriculum" className="link-arrow">
              View Full Curriculum <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>GET IN TOUCH</p>
              <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                Interested in<br /><span className="serif-accent">{program.title}?</span>
              </h2>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                Fill in the form and our team will get back to you with more information about this program, current schedules, and how to get started.
              </p>
              <div style={{padding:'1.5rem', background:'var(--c-bg)', border:'1px solid var(--c-border)', borderRadius:'1rem', marginBottom:'1.5rem'}}>
                <p style={{fontSize:'0.8125rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.75rem'}}>Prefer to talk directly?</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{width:'100%', justifyContent:'center'}}>
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div>
              <EnquiryForm preselectedProgram={program.id} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py" style={{background:'var(--c-bg)', borderBottom:'1px solid var(--c-border)'}}>
        <div className="container" style={{maxWidth:'720px', margin:'0 auto'}}>
          <p className="section-label" style={{marginBottom:'1rem'}}>FAQ</p>
          <h2 className="heading-lg" style={{marginBottom:'2rem'}}>Common Questions</h2>
          {programFaqs.map(faq => <FaqItem key={faq.id} item={faq} />)}
        </div>
      </section>

      {/* Related Programs */}
      <section className="section-py">
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>RELATED PROGRAMS</p>
          <h2 className="heading-lg" style={{marginBottom:'2.5rem'}}>You Might Also Like</h2>
          <div className="three-col">
            {relatedPrograms.map((prog) => (
              <Link to={`/programs/${prog.slug}`} key={prog.id} className="card" style={{display:'block', padding:'1.5rem', textDecoration:'none'}}>
                <span style={{fontSize:'0.7rem', fontWeight:'700', letterSpacing:'0.08em', color:'var(--c-text-sec)'}}>PROGRAM {prog.number}</span>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.0625rem', fontWeight:'600', color:'var(--c-text)', margin:'0.5rem 0 0.75rem', lineHeight:'1.3'}}>{prog.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.6', marginBottom:'1rem'}}>{prog.description.slice(0,120)}…</p>
                <span className="link-arrow" style={{fontSize:'0.8125rem'}}>View Program <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
