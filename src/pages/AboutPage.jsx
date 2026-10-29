import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Img from '../components/common/Img';
import Breadcrumb from '../components/common/Breadcrumb';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function AboutPage() {
  const waLink = createWhatsAppLink(whatsappMessages.general);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <Img src="/images/03-office-interior.webp" alt="" loading="lazy" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'About' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginTop:'1rem', marginBottom:'1rem'}}>
            About <span className="serif-accent" style={{color:'var(--c-lime)'}}>ISDM</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'560px', lineHeight:'1.7'}}>
            International School of Digital Marketing — a proposed learning institution bringing practical, modern digital marketing education to learners across India and beyond.
          </p>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>WHO WE ARE</p>
              <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                Where Marketing<br />
                <span className="serif-accent">Meets Technology.</span>
              </h2>
              <p className="text-lead" style={{marginBottom:'1.5rem'}}>
                Digital marketing is no longer a single discipline. It sits at the intersection of strategy, creativity, data analysis, technology, and human understanding. ISDM's curriculum is designed to reflect that reality.
              </p>
              <p className="text-body" style={{marginBottom:'1.5rem'}}>
                Whether you're a student building your first career path, a professional adding digital skills to an existing practice, or a business owner learning to manage your own marketing — ISDM's proposed programs aim to be practical, structured, and genuinely useful.
              </p>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                All curriculum details, programs, and location information on this website represent ISDM's intended offering. We encourage you to connect with our team to discuss current availability, pricing, and schedules before making any commitment.
              </p>
              <Link to="/programs" className="btn btn-dark">
                Explore Programs <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/5'}}>
                <Img
                  src="/images/03-office-interior.webp"
                  alt="ISDM learning and office environment"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape */}
      <section className="section-py" style={{background:'var(--c-bg-dark)', borderBottom:'1px solid var(--c-border-dark)'}}>
        <div className="container">
          <div style={{maxWidth:'720px', margin:'0 auto', textAlign:'center'}}>
            <p className="section-label" style={{marginBottom:'1rem', color:'var(--c-text-dark)'}}>THE DIGITAL SHIFT</p>
            <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.5rem'}}>
              The Marketing Landscape<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Is Changing Fast.</span>
            </h2>
            <p style={{color:'var(--c-text-dark)', fontSize:'1.0625rem', lineHeight:'1.8', marginBottom:'2.5rem'}}>
              Search algorithms update. New AI tools emerge. Social platforms evolve. Consumer behaviour shifts. The marketers who will succeed in this environment are those who understand principles deeply enough to adapt — not those who have memorised the current settings of a particular tool.
            </p>
            <p style={{color:'var(--c-text-dark)', fontSize:'1.0625rem', lineHeight:'1.8'}}>
              ISDM's curriculum focuses on durable principles alongside current tool fluency — giving learners a foundation that will hold value as the landscape continues to evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>LEARNING PHILOSOPHY</p>
          <h2 className="heading-xl" style={{marginBottom:'3rem', maxWidth:'560px'}}>
            The ISDM<br /><span className="serif-accent">Approach to Learning.</span>
          </h2>
          <div className="features-grid">
            {[
              { num:'01', title:'Curriculum Before Tools', desc:'We start with marketing fundamentals — strategy, audience, objectives, channel logic — before diving into any platform-specific workflow.' },
              { num:'02', title:'Practical First', desc:'Every concept is connected to a real-world scenario. Theory is introduced to explain practice, not replace it.' },
              { num:'03', title:'Portfolio-Oriented', desc:'By the end of a program, learners should have a collection of case studies, reports, and projects they can genuinely show to employers or clients.' },
              { num:'04', title:'Honest About AI', desc:'AI tools are explored as useful, imperfect instruments. We cover their strengths, limitations, and the critical thinking required to use them well.' },
              { num:'05', title:'Multi-Channel Thinking', desc:'Digital marketing doesn\'t happen in a single channel. Understanding how SEO, paid, social, email, and content work together is fundamental.' },
              { num:'06', title:'Career-Ready Outcomes', desc:'Professional skills — communication, presentation, client management, portfolio development — are built into the curriculum, not treated as optional extras.' },
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

      {/* Global Perspective */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
              <Img
                src="/images/Modern-ISDM-Campus-Entrance.webp"
                alt="ISDM campus — a modern learning environment"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
                loading="lazy"
              />
            </div>
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>GLOBAL PERSPECTIVE</p>
              <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                Learning That Prepares You<br />
                <span className="serif-accent">for International Opportunities.</span>
              </h2>
              <p className="text-body" style={{marginBottom:'1.25rem'}}>
                Digital marketing is a global discipline. The same analytical thinking, campaign planning, and content strategy skills that work in India are valuable in Singapore, Germany, or anywhere with an active digital economy.
              </p>
              <p className="text-body" style={{marginBottom:'1.25rem'}}>
                ISDM's planned locations across Pune, Nagpur, Singapore, and Germany reflect a vision for learning that transcends geography while remaining grounded in local market understanding.
              </p>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                All location information represents ISDM's intended presence. Please enquire directly about current availability at specific locations.
              </p>
              <Link to="/locations" className="link-arrow">
                View Locations <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py section-dark">
        <div className="container" style={{textAlign:'center', maxWidth:'640px', margin:'0 auto'}}>
          <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.25rem'}}>
            Have Questions?<br />
            <span className="serif-accent" style={{color:'var(--c-lime)'}}>We're Here to Help.</span>
          </h2>
          <p style={{color:'var(--c-text-dark)', fontSize:'1rem', lineHeight:'1.75', marginBottom:'2.5rem'}}>
            Connect with the ISDM team to discuss programs, locations, curriculum, and learning formats currently available.
          </p>
          <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-lime-dark">
              Contact ISDM <ArrowRight size={16} />
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
