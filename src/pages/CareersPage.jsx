import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function CareersPage() {
  const waLink = createWhatsAppLink(whatsappMessages.general);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <Img src="/images/10-student-community.webp" alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Careers' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            Career<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Development.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            Preparing for the work behind the results — portfolio building, professional presentation, and the skills that help you launch and grow a marketing career.
          </p>
        </div>
      </section>

      {/* Career prep */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>PREPARATION</p>
              <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                Prepare for the Work<br />
                <span className="serif-accent">Behind the Results.</span>
              </h2>
              <p className="text-lead" style={{marginBottom:'1.5rem'}}>
                Technical skills get you into a role. Professional skills — communication, presentation, portfolio quality, and client management — help you grow within it.
              </p>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                The ISDM curriculum's final module is dedicated to career and freelancing preparation, building the professional layer on top of the technical foundation developed throughout the program.
              </p>
              <Link to="/curriculum" className="btn btn-dark">
                View Module 12 <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
                <Img
                  src="/images/10-student-community.webp"
                  alt="ISDM students engaged in career preparation activities"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>WHAT WE COVER</p>
          <h2 className="heading-xl" style={{marginBottom:'3rem', maxWidth:'560px'}}>
            Professional Skills<br /><span className="serif-accent">Included in the Curriculum.</span>
          </h2>
          <div className="features-grid">
            {[
              { num:'01', title:'Portfolio Development', desc:'Build a professional collection of marketing case studies, reports, and project work that demonstrates your capabilities to employers and clients.' },
              { num:'02', title:'Resume Preparation', desc:'Craft a marketing-specific resume that clearly communicates your skills, projects, and value to hiring managers.' },
              { num:'03', title:'Interview Practice', desc:'Prepare for marketing interviews — from articulating your process to discussing campaign performance and answering technical questions.' },
              { num:'04', title:'Freelancing Fundamentals', desc:'Client discovery, proposal writing, scope definition, pricing basics, and managing freelance relationships professionally.' },
              { num:'05', title:'Client Communication', desc:'Writing project updates, presenting campaign reports, managing feedback, and communicating clearly under pressure.' },
              { num:'06', title:'Campaign Presentation', desc:'Structure and deliver compelling presentations of marketing strategies, campaign results, and performance recommendations.' },
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

      {/* Portfolio */}
      <section className="section-py section-dark" style={{borderBottom:'1px solid var(--c-border-dark)'}}>
        <div className="container">
          <div style={{maxWidth:'720px', margin:'0 auto'}}>
            <p className="section-label" style={{marginBottom:'1rem', color:'var(--c-text-dark)'}}>PORTFOLIO</p>
            <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.5rem'}}>
              Leave With Work You Can<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Actually Show.</span>
            </h2>
            <p style={{color:'var(--c-text-dark)', lineHeight:'1.8', fontSize:'1.0625rem', marginBottom:'2rem'}}>
              Throughout the ISDM program, you'll complete practical exercises, audits, campaign plans, content pieces, and reports. The final module helps you package the best of this work into professional case studies.
            </p>
            <p style={{color:'var(--c-text-dark)', lineHeight:'1.8', fontSize:'1.0625rem', marginBottom:'2.5rem'}}>
              A strong portfolio demonstrates to potential employers or clients that you have done the work — not just studied the theory. That distinction matters in a competitive market.
            </p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
              {['SEO Audit Report', 'Campaign Strategy Deck', 'Content Calendar', 'Analytics Dashboard', 'AI Workflow Document', 'Client Case Study'].map(item => (
                <div key={item} style={{padding:'0.875rem 1.125rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'0.625rem', fontSize:'0.875rem', color:'rgba(255,255,255,0.75)', display:'flex', gap:'0.625rem', alignItems:'center'}}>
                  <span style={{width:'6px', height:'6px', borderRadius:'50%', background:'var(--c-lime)', flexShrink:0}} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container" style={{maxWidth:'720px', margin:'0 auto', textAlign:'center'}}>
          <p className="section-label" style={{marginBottom:'1rem'}}>AN HONEST NOTE</p>
          <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
            We Don't Guarantee<br /><span className="serif-accent">Outcomes.</span>
          </h2>
          <p className="text-body" style={{marginBottom:'1.25rem'}}>
            ISDM's career preparation module equips you with professional skills, a structured portfolio, and the tools to pursue marketing opportunities. What you do with that preparation — and the results you achieve — depend on your own effort, the market, and factors outside any curriculum's control.
          </p>
          <p className="text-body" style={{marginBottom:'2rem'}}>
            We do not make claims about average salaries, guaranteed placements, or employer partnerships. If you see such claims attributed to ISDM elsewhere, please contact us directly to verify.
          </p>
          <Link to="/contact" className="btn btn-dark">
            Ask Us Directly <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py section-dark">
        <div className="container" style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
          <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.25rem'}}>
            Ready to Start<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Building Your Career?</span>
          </h2>
          <p style={{color:'var(--c-text-dark)', lineHeight:'1.75', marginBottom:'2.5rem'}}>
            Explore our programs or connect with the team to find the best path for your goals.
          </p>
          <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
            <Link to="/programs" className="btn btn-lime-dark">Explore Programs <ArrowRight size={16} /></Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
