import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import locations, { getLocationStatusLabel, getLocationStatusColor } from '../data/locations';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function LocationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Breadcrumb items={[{ label: 'Locations' }]} />
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'1rem'}}>
            Our<br /><span className="serif-accent" style={{color:'var(--c-lime)'}}>Locations.</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', maxWidth:'520px', lineHeight:'1.7'}}>
            ISDM's learning presence across India, South-East Asia, and Europe. All locations are enquiry-based or planned — connect with our team for current availability.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{marginBottom:'3rem', padding:'1rem 1.25rem', background:'#fffbea', border:'1px solid #fde68a', borderRadius:'0.875rem', fontSize:'0.875rem', color:'#92400e'}}>
            ⚠️ <strong>Important:</strong> All location details on this page represent ISDM's intended presence and are illustrative. Please enquire directly for current addresses, schedules, and availability. Do not visit any location without confirming details first.
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1.5rem'}}>
            {locations.map(loc => {
              const statusColor = getLocationStatusColor(loc.status);
              const statusLabel = getLocationStatusLabel(loc.status);
              const waLink = createWhatsAppLink(loc.whatsappMessage);

              return (
                <div key={loc.id} style={{border:'1px solid var(--c-border)', borderRadius:'1.25rem', overflow:'hidden', background:'#fff'}}>
                  <div style={{height:'260px', overflow:'hidden', position:'relative'}}>
                    <Img
                      src={loc.image}
                      alt={`${loc.city}, ${loc.country} — ISDM ${statusLabel}`}
                      style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease'}}
                      loading="lazy"
                    />
                    <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(21,21,21,0.5), transparent)'}}>
                      <span className="location-status-badge" style={{position:'absolute', top:'1rem', left:'1rem', background:`${statusColor}22`, color:statusColor, border:`1px solid ${statusColor}44`}}>
                        <span className="location-status-dot" style={{background:statusColor}} />
                        {statusLabel}
                      </span>
                    </div>
                  </div>
                  <div style={{padding:'1.75rem'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.35rem'}}>
                      <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.375rem', fontWeight:'700', color:'var(--c-text)'}}>{loc.city}</h2>
                      {loc.hubCode && (
                        <span className="award-pill" style={{fontSize:'0.6875rem', padding:'0.25rem 0.625rem'}}>
                          {loc.hubCode} · {loc.timezone}
                        </span>
                      )}
                    </div>
                    <p style={{fontSize:'0.8125rem', color:'var(--c-text-sec)', marginBottom:'1rem', display:'flex', gap:'0.25rem', alignItems:'center'}}>
                      <MapPin size={12} /> {loc.country} · {loc.region}
                    </p>
                    <p style={{fontSize:'0.875rem', color:'var(--c-text-sec)', lineHeight:'1.7', marginBottom:'1.5rem'}}>{loc.intro}</p>
                    <p style={{fontSize:'0.75rem', color:'var(--c-text-sec)', fontStyle:'italic', marginBottom:'1.5rem'}}>
                      📍 {loc.addressLabel}<br />
                      <span style={{color:'#b45309'}}>{loc.addressNote}</span>
                    </p>
                    <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
                      <Link to={`/locations/${loc.slug}`} className="btn btn-dark" style={{fontSize:'0.8125rem', padding:'0.5rem 1.25rem'}}>
                        View Details
                      </Link>
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{fontSize:'0.8125rem', padding:'0.5rem 1.25rem'}}>
                        <MessageCircle size={14} /> Enquire
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
