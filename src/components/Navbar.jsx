import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={{ height: '64px', backgroundColor: 'var(--color-canvas)', borderBottom: '1px solid var(--color-hairline)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <h1 className="title-sm" style={{ letterSpacing: '1.4px', textTransform: 'uppercase' }}>
          LEGAL 
        </h1>
        <nav style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <Link to="/" className="caption-uppercase" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Home</Link>
          <Link to="/chatbot" className="caption-uppercase" style={{ color: 'var(--color-ink)', textDecoration: 'none' }}>Chatbot</Link>
          <Link to="/chatbot" className="btn btn-primary" style={{ height: '40px', padding: '0 24px' }}>Explore</Link>
        </nav>
      </div>
    </header>
  );
}