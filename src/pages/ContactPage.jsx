import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import EnquiryForm from '../components/forms/EnquiryForm';
import { siteConfig } from '../data/siteConfig';
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp';

export default function ContactPage() {
  const waLink = createWhatsAppLink(whatsappMessages.general);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            Get in<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Touch.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            Connect with the ISDM team to discuss programs, locations, schedules, and any questions about the curriculum.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="two-col" style={{alignItems:'flex-start'}}>
            {/* Left — contact info */}
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>DIRECT CONTACT</p>
              <h2 className="heading-lg" style={{marginBottom:'2rem'}}>
                We're Ready<br /><span className="serif-accent">to Help.</span>
              </h2>

              {/* Phones */}
              <div style={{display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'2.5rem'}}>
                {siteConfig.contact.phones.map(p => (
                  <div key={p.tel} style={{display:'flex', alignItems:'center', gap:'1rem', padding:'1.25rem', border:'1px solid var(--c-border)', borderRadius:'0.875rem', background:'#fff'}}>
                    <div style={{width:'44px', height:'44px', borderRadius:'50%', background:'var(--c-bg)', border:'1px solid var(--c-border)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                      <Phone size={18} style={{color:'var(--c-cobalt)'}} />
                    </div>
                    <div>
                      <p style={{fontSize:'0.75rem', fontWeight:'600', letterSpacing:'0.06em', textTransform:'uppercase', color:'var(--c-text-sec)', marginBottom:'0.25rem'}}>{p.label}</p>
                      <a href={`tel:${p.tel}`} style={{fontFamily:'var(--font-display)', fontSize:'1.125rem', fontWeight:'600', color:'var(--c-text)'}}>{p.number}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <p className="section-label" style={{marginBottom:'1rem'}}>WHATSAPP</p>
              <div style={{padding:'1.5rem', border:'1px solid var(--c-border)', borderRadius:'0.875rem', background:'#fff', marginBottom:'2.5rem'}}>
                <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', marginBottom:'1rem', lineHeight:'1.65'}}>
                  Prefer to chat? Send us a WhatsApp message and our team will respond during business hours.
                </p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{width:'100%', justifyContent:'center'}}>
                  <MessageCircle size={16} />
                  Chat on WhatsApp (+91 8080152238)
                </a>
              </div>

              {/* Email placeholder */}
              <p className="section-label" style={{marginBottom:'1rem'}}>EMAIL</p>
              <div style={{padding:'1.25rem', border:'1px dashed var(--c-border)', borderRadius:'0.875rem', fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.65'}}>
                {siteConfig.contact.emailIsPlaceholder ? (
                  <>Email enquiries are currently handled via phone and WhatsApp. An email address will be listed here once verified.</>
                ) : (
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                )}
              </div>

              {/* Locations */}
              <div style={{marginTop:'2.5rem'}}>
                <p className="section-label" style={{marginBottom:'1rem'}}>LOCATIONS</p>
                <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                  <Link to="/locations/pune" className="link-arrow">Pune — Maharashtra, India <ArrowRight size={13} /></Link>
                  <Link to="/locations/nagpur" className="link-arrow">Nagpur — Maharashtra, India <ArrowRight size={13} /></Link>
                  <Link to="/locations/singapore" className="link-arrow">Singapore (Planned) <ArrowRight size={13} /></Link>
                  <Link to="/locations/germany" className="link-arrow">Germany / Berlin (Planned) <ArrowRight size={13} /></Link>
                </div>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div style={{position:'sticky', top:'5rem'}}>
              <div style={{padding:'2rem', border:'1px solid var(--c-border)', borderRadius:'1.25rem', background:'#fff'}}>
                <p className="section-label" style={{marginBottom:'1rem'}}>PROGRAMME ENQUIRY</p>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.25rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'1.5rem'}}>
                  Send an Enquiry
                </h3>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
