import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section style={{minHeight:'70vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'4rem 1.25rem', textAlign:'center'}}>
      <div>
        <p style={{fontFamily:'var(--font-display)', fontSize:'clamp(5rem, 15vw, 10rem)', fontWeight:'700', letterSpacing:'-0.06em', color:'var(--c-border)', lineHeight:'1', marginBottom:'1.5rem'}}>
          404
        </p>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem, 3vw, 2.25rem)', fontWeight:'700', color:'var(--c-text)', marginBottom:'1rem'}}>
          Page Not Found
        </h1>
        <p style={{fontSize:'1rem', color:'var(--c-text-sec)', maxWidth:'420px', lineHeight:'1.7', margin:'0 auto 2.5rem'}}>
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap'}}>
          <Link to="/" className="btn btn-dark">
            <Home size={16} /> Return Home
          </Link>
          <Link to="/programs" className="btn btn-primary">
            Explore Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
