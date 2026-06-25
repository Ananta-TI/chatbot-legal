export default function Team() {
  return (
    <section className="section-band scroll-section">
      <div className="container">
        <span className="caption-uppercase">Team</span>
        <h2 
          className="display-lg" 
          style={{ marginTop: "var(--spacing-xs)", marginBottom: "var(--spacing-xl)" }}
        >
          Dibangun untuk pendamping hukum dan masyarakat.
        </h2>
        
        <div className="grid-3">
          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Product</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-xs)', fontSize: '24px' }}>
              Tim AI & Hukum
            </h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>
              Kolaborasi engineer dan legal advisor memastikan setiap jawaban akurat.
            </p>
          </div>

          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Design</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-xs)', fontSize: '24px' }}>
              Tata visual premium
            </h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>
              UI yang bersih, tipografi natural, dan interaksi halus untuk pengalaman elegan.
            </p>
          </div>

          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Experience</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-xs)', fontSize: '24px' }}>
              Navigasi intuitif
            </h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>
              Flow website dirancang untuk browsing cepat dan fokus informasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}