// Ganti nama function sesuai dengan file (Team / Evaluation)
export default function Evaluation() {
  return (
    <section className="section-band">
      <div className="container">
        <span className="caption-uppercase">Evaluation</span>
        <h2 className="display-lg" style={{ marginTop: "var(--spacing-xs)", marginBottom: "var(--spacing-xl)" }}>Memastikan kredibilitas.</h2>
        
        <div className="grid-3">
          <div className="card-dark">
            <h3 className="title-sm" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Verifikasi Hukum</h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>Model memeriksa referensi dan isu hukum sebelum menjawab.</p>
          </div>
          <div className="card-dark">
            <h3 className="title-sm" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Confidence Score</h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>Tiap respons diberi nilai kepercayaan untuk transparansi.</p>
          </div>
          <div className="card-dark">
            <h3 className="title-sm" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Audit Trail</h3>
            <p className="body-md" style={{ marginTop: 'var(--spacing-md)' }}>Jejak log mendukung tinjauan kembali dan kepatuhan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}