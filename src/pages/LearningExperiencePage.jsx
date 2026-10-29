import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function LearningExperiencePage() {
  const waLink = createWhatsAppLink(whatsappMessages.general);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true">
          <Img src="/images/02-classroom-training.png.webp" alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Learning Experience' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            The Learning<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Experience.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            How the ISDM approach to learning is structured — from classroom sessions to practical projects, workshops, and portfolio development.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>HOW IT WORKS</p>
              <h2 className="heading-xl" style={{marginBottom:'1.5rem'}}>
                Structured Learning,<br />
                <span className="serif-accent">Practical Focus.</span>
              </h2>
              <p className="text-lead" style={{marginBottom:'1.5rem'}}>
                ISDM programs are designed to build from conceptual understanding to practical execution. Each module introduces a topic, explains the principles, and then connects them to real exercises.
              </p>
              <div style={{display:'flex', flexDirection:'column', gap:'1.25rem'}}>
                {[
                  { step:'01', title:'Conceptual Foundations', desc:'Each topic begins with the underlying principles — why it matters, how it fits into the broader marketing picture.' },
                  { step:'02', title:'Tool-Level Fluency', desc:'Key platforms and tools are introduced in context, so you understand not just how to use them but when and why.' },
                  { step:'03', title:'Practical Application', desc:'Exercises, case studies, and scenario-based assignments put theory into practice with realistic marketing situations.' },
                  { step:'04', title:'Portfolio Development', desc:'Selected exercises become portfolio pieces — documented work samples that demonstrate your capabilities.' },
                ].map((s) => (
                  <div key={s.step} style={{display:'flex', gap:'1.25rem', alignItems:'flex-start'}}>
                    <span style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:'700', color:'var(--c-border)', letterSpacing:'-0.04em', flexShrink:0, lineHeight:'1', paddingTop:'0.125rem'}}>{s.step}</span>
                    <div>
                      <h3 style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.375rem'}}>{s.title}</h3>
                      <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.65'}}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'3/4'}}>
              <Img
                src="/images/02-classroom-training.png.webp"
                alt="ISDM classroom training session with students engaged in practical learning"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-py section-dark" style={{borderBottom:'1px solid var(--c-border-dark)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem', color:'var(--c-text-dark)'}}>PRACTICAL PROJECTS</p>
          <h2 className="heading-xl" style={{color:'#fff', marginBottom:'3rem', maxWidth:'560px'}}>
            Real Scenarios,<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Real Skills.</span>
          </h2>
          <div className="three-col">
            {[
              { title:'SEO Audit', desc:'Conduct a structured SEO audit of a demonstration website. Identify technical issues, on-page opportunities, and content gaps. Deliver a prioritised improvement report.' },
              { title:'Social Media Campaign', desc:'Develop a complete content calendar for a sample brand. Define content pillars, write copy, plan creatives, and build a measurement framework.' },
              { title:'Advertising Strategy', desc:'Create a multi-platform paid campaign plan. Define objectives, audience segments, budget allocation, ad formats, and a weekly reporting structure.' },
              { title:'AI Marketing Workflow', desc:'Design a documented AI-assisted workflow for a specific marketing use case. Include prompt examples, output samples, and a human verification process.' },
              { title:'Analytics Report', desc:'Interpret sample Google Analytics data and produce a monthly marketing performance report with observations and recommendations.' },
              { title:'Portfolio Case Study', desc:'Write a professional case study documenting one of your program projects — including brief, strategy, execution, and measurable outcomes.' },
            ].map((p) => (
              <div key={p.title} style={{padding:'1.5rem', background:'rgba(255,255,255,0.05)', borderRadius:'1rem', border:'1px solid rgba(255,255,255,0.08)'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:'600', color:'#fff', marginBottom:'0.75rem'}}>{p.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--c-text-dark)', lineHeight:'1.7'}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
              <Img
                src="/images/08-student-collaboration.webp"
                alt="ISDM students collaborating on a group project"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
                loading="lazy"
              />
            </div>
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>PEER COLLABORATION</p>
              <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                Learning With<br /><span className="serif-accent">Others Who Are Building Too.</span>
              </h2>
              <p className="text-body" style={{marginBottom:'1.25rem'}}>
                Marketing is a collaborative discipline. Working alongside peers on shared briefs, reviewing each other's work, and discussing campaign decisions develops judgment that solo study alone cannot replicate.
              </p>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                Group exercises, peer feedback sessions, and collaborative planning exercises are built into the ISDM learning experience — not treated as optional extras.
              </p>
              <Link to="/about" className="link-arrow">
                About the ISDM approach <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>WORKSHOPS & AI</p>
              <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                Workshops, Masterclasses,<br /><span className="serif-accent">and Responsible AI.</span>
              </h2>
              <p className="text-body" style={{marginBottom:'1.25rem'}}>
                Workshops and intensive sessions complement the main curriculum, diving deeper into specific topics or exploring emerging tools and techniques.
              </p>
              <p className="text-body" style={{marginBottom:'1.25rem'}}>
                AI tools — including generative AI for content, research, and campaign planning — are explored as part of the regular curriculum with an emphasis on responsible use, output verification, and critical thinking.
              </p>
              <p className="text-body" style={{marginBottom:'2rem'}}>
                We believe that understanding how to prompt AI well, evaluate its outputs critically, and integrate it responsibly is now a core marketing skill — not a specialist add-on.
              </p>
              <Link to="/events" className="link-arrow">
                View upcoming events <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
              <Img
                src="/images/09-workshop-seminar.webp"
                alt="ISDM workshop session — hands-on learning with expert guidance"
                style={{width:'100%', height:'100%', objectFit:'cover'}}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py section-dark">
        <div className="container" style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
          <h2 className="heading-xl" style={{color:'#fff', marginBottom:'1.25rem'}}>
            Ready to Experience<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>This Yourself?</span>
          </h2>
          <p style={{color:'var(--c-text-dark)', lineHeight:'1.75', marginBottom:'2.5rem'}}>
            Connect with the ISDM team to discuss programs, current schedules, and learning formats available in your location.
          </p>
          <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
            <Link to="/contact" className="btn btn-lime-dark">Get in Touch <ArrowRight size={16} /></Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
