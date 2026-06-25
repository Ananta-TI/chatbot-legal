import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-canvas)', padding: 'var(--spacing-xl) 0', borderTop: '1px solid var(--color-hairline)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
          <div style={{ maxWidth: '300px' }}>
            <h3 className="title-sm" style={{ textTransform: 'uppercase', letterSpacing: '1.4px' }}>NTA AI</h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-xs)' }}>
              Aplikasi AI yang membantu masyarakat memahami hukum perlindungan anak secara cepat dan terpercaya.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-xl)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Sitemap</span>
              <Link to="/" className="body-md" style={{ textDecoration: 'none', color: 'var(--color-ink)' }}>Beranda</Link>
              <Link to="/chatbot" className="body-md" style={{ textDecoration: 'none', color: 'var(--color-ink)' }}>Chatbot</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Informasi</span>
              <a href="#dataset" className="body-md" style={{ textDecoration: 'none', color: 'var(--color-ink)' }}>Dataset</a>
              <a href="#" className="body-md" style={{ textDecoration: 'none', color: 'var(--color-ink)' }}>Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}