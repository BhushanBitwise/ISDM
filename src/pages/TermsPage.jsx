import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Terms and Conditions' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>Terms and Conditions</h1>
          <p style={{color:'rgba(255,255,255,0.6)', fontSize:'0.875rem'}}>Last updated: October 2024</p>
        </div>
      </section>
      <section className="section-py">
        <div className="container" style={{maxWidth:'780px', margin:'0 auto'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'2.5rem'}}>
            {[
              {
                title: '1. Acceptance of Terms',
                body: 'By accessing and using the ISDM website (isdm.edu.in), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.'
              },
              {
                title: '2. Website Purpose',
                body: 'This website is provided for informational purposes about the International School of Digital Marketing\'s proposed programs, curriculum, and locations. Content on this website represents ISDM\'s intended offering and is subject to change without notice.'
              },
              {
                title: '3. Accuracy of Information',
                body: 'ISDM makes reasonable efforts to ensure the accuracy of information on this website. However, program details, locations, schedules, and fees are subject to verification and change. We encourage you to confirm current details directly with the ISDM team before making any decisions.'
              },
              {
                title: '4. Location Information',
                body: 'Location addresses and descriptions on this website are illustrative of intended presence and are not verified operational offices. Do not visit any location without first confirming current details with the ISDM team.'
              },
              {
                title: '5. Forms and Enquiries',
                body: 'Enquiry form submissions on this website are processed in demonstration mode unless a backend system has been connected. For confirmed enquiries, please use phone or WhatsApp. ISDM does not guarantee response times but aims to reply to all enquiries within 2 business days.'
              },
              {
                title: '6. Intellectual Property',
                body: 'All content on this website — including text, graphics, logos, images, and design elements — is the property of ISDM or its licensors. You may not reproduce, distribute, or create derivative works without written permission.'
              },
              {
                title: '7. Limitation of Liability',
                body: 'ISDM is not liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website or its information. This includes decisions made based on program descriptions, location details, or any other content on this website.'
              },
              {
                title: '8. External Links',
                body: 'This website may contain links to external websites. ISDM is not responsible for the content or privacy practices of those sites. External links are provided for convenience only.'
              },
              {
                title: '9. Changes to Terms',
                body: 'ISDM reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the website constitutes acceptance of updated Terms.'
              },
              {
                title: '10. Governing Law',
                body: 'These Terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Maharashtra, India.'
              },
            ].map(section => (
              <div key={section.title}>
                <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.125rem', fontWeight:'600', color:'var(--c-text)', marginBottom:'0.75rem'}}>{section.title}</h2>
                <p style={{fontSize:'0.9375rem', color:'var(--c-text-sec)', lineHeight:'1.8'}}>{section.body}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid var(--c-border)', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <Link to="/privacy-policy" className="btn btn-outline">Privacy Policy</Link>
            <Link to="/contact" className="btn btn-dark">Contact ISDM</Link>
          </div>
        </div>
      </section>
    </>
  );
}
