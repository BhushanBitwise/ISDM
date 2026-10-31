import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import Img from '../components/common/Img';
import locations, { getLocationStatusLabel, getLocationStatusColor } from '../data/locations';
import programs from '../data/programs';
import { createWhatsAppLink } from '../utils/whatsapp';
import { siteConfig } from '../data/siteConfig';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find(
    l => l.slug === slug || l.id === slug || 
    (slug === 'united-states' && l.id === 'us') || 
    (slug === 'usa' && l.id === 'us') || 
    (slug === 'united-kingdom' && l.id === 'uk')
  );

  if (!location) return <Navigate to="/404" replace />;

  const statusLabel = getLocationStatusLabel(location.status);
  const statusColor = getLocationStatusColor(location.status);
  const waLink = createWhatsAppLink(location.whatsappMessage);
  const relatedPrograms = programs.filter(p => location.programs.includes(p.id));
  const otherLocations = locations.filter(l => l.id !== location.id);

  return (
    <>
      <section className="page-hero" style={{minHeight:'55vh', display:'flex', alignItems:'center'}}>
        <div className="page-hero-bg" aria-hidden="true">
          <Img src={location.image} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} loading="eager" />
        </div>
        <div className="container page-hero-inner">
          <Breadcrumb items={[
            { label: 'Locations', href: '/locations' },
            { label: location.city }
          ]} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span className="location-status-badge" style={{background:`${statusColor}22`, color:statusColor, border:`1px solid ${statusColor}44`}}>
              <span className="location-status-dot" style={{background:statusColor}} />
              {statusLabel}
            </span>
            {location.hubCode && (
              <span className="award-pill award-pill-dark" style={{ fontSize: '0.6875rem' }}>
                {location.hubCode} · {location.timezone}
              </span>
            )}
          </div>
          <h1 className="heading-xl" style={{color:'#fff', marginBottom:'0.5rem', marginTop: '0.75rem'}}>
            {location.city}
          </h1>
          <p style={{color:'rgba(255,255,255,0.7)', fontSize:'1.0625rem', display:'flex', alignItems:'center', gap:'0.375rem'}}>
            <MapPin size={16} /> {location.country} · {location.region}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py" style={{borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label" style={{marginBottom:'1rem'}}>ABOUT THIS LOCATION</p>
              <h2 className="heading-lg" style={{marginBottom:'1.25rem'}}>
                ISDM in<br /><span className="serif-accent">{location.city}.</span>
              </h2>
              <p className="text-body" style={{marginBottom:'1.5rem'}}>{location.intro}</p>

              <div style={{padding:'1.25rem', background:'#fffbea', border:'1px solid #fde68a', borderRadius:'0.875rem', marginBottom:'1.5rem', fontSize:'0.875rem', color:'#92400e'}}>
                <strong>Location Status: {statusLabel}</strong><br />
                {location.addressLabel}<br />
                <em>{location.addressNote}</em>
              </div>

              <p className="section-label" style={{marginBottom:'1rem'}}>CONTACT OPTIONS</p>
              <div style={{display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem'}}>
                {siteConfig.contact.phones.map(p => (
                  <a key={p.tel} href={`tel:${p.tel}`} style={{display:'flex', alignItems:'center', gap:'0.625rem', fontSize:'0.875rem', color:'var(--c-text-sec)'}}>
                    <Phone size={15} style={{color:'var(--c-cobalt)'}} /> {p.label}: {p.number}
                  </a>
                ))}
              </div>

              <div style={{display:'flex', gap:'0.875rem', flexWrap:'wrap'}}>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Contact Form <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div>
              <div style={{borderRadius:'1.25rem', overflow:'hidden', aspectRatio:'4/3'}}>
                <Img
                  src={location.image}
                  alt={`${location.city}, ${location.country}`}
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs at this location */}
      <section className="section-py" style={{background:'var(--c-bg)', borderBottom:'1px solid var(--c-border)'}}>
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>AVAILABLE PROGRAMS</p>
          <h2 className="heading-lg" style={{marginBottom:'2.5rem'}}>
            Programs Available<br /><span className="serif-accent">at This Location.</span>
          </h2>
          <div className="three-col">
            {relatedPrograms.map(prog => (
              <Link to={`/programs/${prog.slug}`} key={prog.id} className="card" style={{display:'block', padding:'1.25rem', textDecoration:'none'}}>
                <span style={{fontSize:'0.7rem', fontWeight:'700', letterSpacing:'0.08em', color:'var(--c-text-sec)'}}>PROGRAM {prog.number}</span>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:'600', color:'var(--c-text)', margin:'0.5rem 0 0.75rem', lineHeight:'1.3'}}>{prog.title}</h3>
                <span className="link-arrow" style={{fontSize:'0.8125rem'}}>Learn more <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="section-py">
        <div className="container">
          <p className="section-label" style={{marginBottom:'1rem'}}>OTHER LOCATIONS</p>
          <h2 className="heading-lg" style={{marginBottom:'2.5rem'}}>More ISDM<br /><span className="serif-accent">Locations.</span></h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1rem'}}>
            {otherLocations.map(loc => {
              const sl = getLocationStatusLabel(loc.status);
              const sc = getLocationStatusColor(loc.status);
              return (
                <Link to={`/locations/${loc.slug}`} key={loc.id} style={{display:'block', borderRadius:'1rem', overflow:'hidden', aspectRatio:'3/2', position:'relative', textDecoration:'none'}}>
                  <Img src={loc.image} alt={loc.city} style={{width:'100%', height:'100%', objectFit:'cover'}} loading="lazy" />
                  <div style={{position:'absolute', inset:0, background:'linear-gradient(to top, rgba(21,21,21,0.75) 0%, transparent 60%)'}}>
                    <div style={{position:'absolute', bottom:0, left:0, padding:'1.25rem'}}>
                      <span className="location-status-badge" style={{display:'inline-flex', marginBottom:'0.5rem', background:`${sc}22`, color:sc, border:`1px solid ${sc}44`, fontSize:'0.65rem'}}>
                        {sl}
                      </span>
                      <p style={{fontFamily:'var(--font-display)', fontWeight:'700', fontSize:'1.0625rem', color:'#fff'}}>{loc.city}</p>
                      <p style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.6)'}}>{loc.country}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
