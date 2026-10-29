import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>Privacy Policy</h1>
          <p style={{color:'rgba(255,255,255,0.6)', fontSize:'0.875rem'}}>Last updated: October 2024</p>
        </div>
      </section>
      <section className="section-py">
        <div className="container" style={{maxWidth:'780px', margin:'0 auto'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'2.5rem'}}>
            {[
              {
                title: '1. Introduction',
                body: 'International School of Digital Marketing ("ISDM", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and handle your personal data when you use our website or contact us.'
              },
              {
                title: '2. Information We Collect',
                body: 'We may collect personal information that you voluntarily provide to us when you complete our enquiry form, send us a WhatsApp message, or call us directly. This includes your name, phone number, email address, program interest, and preferred location. We do not collect payment information through this website.'
              },
              {
                title: '3. How We Use Your Information',
                body: 'We use the information you provide to respond to your enquiries about our programs and services, to provide you with information you have requested, to improve our website and learning offerings, and to communicate with you about programs, events, or updates where you have indicated interest.'
              },
              {
                title: '4. Data Storage and Security',
                body: 'We take reasonable precautions to protect your personal information. Enquiry form submissions on this website are currently in demonstration mode and are not transmitted to a server unless a backend integration is implemented. WhatsApp messages are handled through WhatsApp\'s own platform and are subject to WhatsApp\'s privacy policy.'
              },
              {
                title: '5. Sharing of Information',
                body: 'We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website or conducting our business, subject to confidentiality obligations.'
              },
              {
                title: '6. Your Rights',
                body: 'You have the right to request access to the personal information we hold about you, to request correction of inaccurate information, and to withdraw consent to processing where applicable. To exercise these rights, contact us via the channels listed on our Contact page.'
              },
              {
                title: '7. Changes to This Policy',
                body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a prominent notice on our website. Your continued use of our website constitutes acceptance of any updated Policy.'
              },
              {
                title: '8. Contact',
                body: 'For privacy-related queries, please contact us via phone (+91 80876 01850) or WhatsApp (+91 8080152238).'
              },
            ].map(section => (
              <div key={section.title}>
                <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.125rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.75rem'}}>{section.title}</h2>
                <p style={{fontSize:'0.9375rem', color:'var(--c-text-sec)', lineHeight:'1.8'}}>{section.body}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid var(--c-border)'}}>
            <Link to="/contact" className="btn btn-dark">Contact ISDM</Link>
          </div>
        </div>
      </section>
    </>
  );
}
