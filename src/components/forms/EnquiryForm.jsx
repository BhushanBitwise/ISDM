import { useState } from 'react';
import { AlertCircle, CheckCircle, Loader, MessageCircle, Send, RotateCcw } from 'lucide-react';
import { validateEnquiryForm, hasErrors } from '../../utils/validation';
import { createWhatsAppLink } from '../../utils/whatsapp';
import programs from '../../data/programs';
import locations from '../../data/locations';

export default function EnquiryForm({ preselectedProgram = '' }) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    program: preselectedProgram,
    location: '',
    message: '',
    consent: true,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | submitted
  const [generatedLink, setGeneratedLink] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => { const n = {...prev}; delete n[name]; return n; });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateEnquiryForm(values);
    if (hasErrors(validation)) {
      setErrors(validation);
      return;
    }

    setStatus('loading');

    const selectedProg = programs.find(p => p.id === values.program)?.title || values.program || 'Digital Marketing';
    const selectedLoc = locations.find(l => l.id === values.location)?.city || values.location || 'All Hubs';

    const formattedMessage =
`*New Admission Enquiry — ISDM*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${values.name}
📱 *Phone:* ${values.phone}
✉️ *Email:* ${values.email}
🎓 *Program:* ${selectedProg}
📍 *Preferred Location:* ${selectedLoc}
💬 *Message:* ${values.message.trim() || 'I am interested in admission details, batch timings, and fee structure.'}
━━━━━━━━━━━━━━━━━━━━
_Submitted via ISDM Official Portal_`;

    const waHref = createWhatsAppLink(formattedMessage);
    setGeneratedLink(waHref);

    // Simulate brief transition for smooth UX then open WhatsApp
    await new Promise(r => setTimeout(r, 600));
    setStatus('submitted');

    // Automatically trigger WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(waHref, '_blank');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setValues({
      name: '',
      phone: '',
      email: '',
      program: preselectedProgram,
      location: '',
      message: '',
      consent: true,
    });
    setErrors({});
  };

  if (status === 'submitted') {
    return (
      <div className="agency-card" style={{ padding: '2.5rem 2rem', textAlign: 'center', border: '1.5px solid var(--c-lime)', background: '#FAF9F4' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#25D36622', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <CheckCircle size={36} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--c-text)' }}>
          Enquiry Prepared for WhatsApp
        </h3>
        <p style={{ color: 'var(--c-text-sec)', fontSize: '0.9375rem', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
          Your enquiry has been dispatched directly to the official ISDM admissions desk at <strong style={{ color: 'var(--c-text)' }}>+91 8080152238</strong>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '340px', margin: '0 auto' }}>
          <a
            href={generatedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center', padding: '0.875rem 1.5rem' }}
          >
            <MessageCircle size={18} />
            Open WhatsApp (+91 8080152238)
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
          >
            <RotateCcw size={14} /> Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Programme enquiry form" className="agency-card" style={{ padding: '2rem', background: '#fff' }}>
      {/* Live Badge Banner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1rem', background: '#F7F5EF', borderRadius: '0.75rem', marginBottom: '1.5rem', border: '1px solid var(--c-border)' }}>
        <span className="pulse-dot" />
        <span style={{ fontSize: '0.8125rem', color: 'var(--c-text)', fontWeight: 600 }}>
          Direct WhatsApp Desk: Submissions route straight to +91 8080152238
        </span>
      </div>

      <div style={{ display: 'grid', gap: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="ef-name">Full Name *</label>
            <input
              id="ef-name"
              name="name"
              type="text"
              autoComplete="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
            />
            {errors.name && <span className="form-error"><AlertCircle size={12} />{errors.name}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="ef-phone">Phone / WhatsApp Number *</label>
            <input
              id="ef-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              value={values.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
            />
            {errors.phone && <span className="form-error"><AlertCircle size={12} />{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ef-email">Email Address *</label>
          <input
            id="ef-email"
            name="email"
            type="email"
            autoComplete="email"
            className={`form-input ${errors.email ? 'error' : ''}`}
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <span className="form-error"><AlertCircle size={12} />{errors.email}</span>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="ef-program">Program of Interest *</label>
            <select
              id="ef-program"
              name="program"
              className={`form-select ${errors.program ? 'error' : ''}`}
              value={values.program}
              onChange={handleChange}
            >
              <option value="">Select a program</option>
              {programs.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
            {errors.program && <span className="form-error"><AlertCircle size={12} />{errors.program}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="ef-location">Preferred Location Hub</label>
            <select
              id="ef-location"
              name="location"
              className="form-select"
              value={values.location}
              onChange={handleChange}
            >
              <option value="">Any Hub / Online Hybrid</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>{l.city}, {l.country}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ef-message">Your Message / Query (Optional)</label>
          <textarea
            id="ef-message"
            name="message"
            className="form-textarea"
            value={values.message}
            onChange={handleChange}
            placeholder="Ask about batch timings, fees, curriculum, or career mentorship..."
            rows={3}
          />
        </div>

        <div className="form-group">
          <div className="form-checkbox-group">
            <input
              id="ef-consent"
              name="consent"
              type="checkbox"
              className="form-checkbox"
              checked={values.consent}
              onChange={handleChange}
            />
            <label htmlFor="ef-consent" className="form-checkbox-label">
              I agree to send this enquiry to ISDM Admissions on WhatsApp (+91 8080152238).
            </label>
          </div>
          {errors.consent && <span className="form-error"><AlertCircle size={12} />{errors.consent}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-whatsapp"
          disabled={status === 'loading'}
          style={{ width: '100%', justifyContent: 'center', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 600, boxShadow: '0 4px 18px rgba(37, 211, 102, 0.35)' }}
        >
          {status === 'loading' ? (
            <><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Preparing WhatsApp...</>
          ) : (
            <><MessageCircle size={18} /> Send to WhatsApp (+91 8080152238) <Send size={15} style={{ marginLeft: '4px' }} /></>
          )}
        </button>
      </div>
    </form>
  );
}
