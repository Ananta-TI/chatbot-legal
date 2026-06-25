export default function CTA() {
  return (
    <section className="section-band">
      <div className="container">
        
        {/* Bagian Copywriting Utama */}
        <div style={{  paddingTop: 'var(--spacing-xs)', paddingBottom: 'var(--spacing-xxxs)' }}>
          <span className="caption-uppercase">Transformasi Digital</span>
          <h2 className="display-lg text-center" style={{ marginTop: "var(--spacing-xs)", maxWidth: '800px' }}>
            Ubah pertanyaan hukum menjadi jawaban yang bisa dipahami siapa saja.
          </h2>
          
          {/* Paragraf yang sebelumnya terpotong */}
          <p className="body-md" style={{ marginTop: 'var(--spacing-sm)', maxWidth: '600px', color: 'var(--color-body)' }}>
            NTA AI menggabungkan NLP, SBERT, dan LLM untuk membuat workflow hukum perlindungan anak lebih cepat, lebih personal, dan sangat interaktif.
          </p>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-xs)', marginTop: 'var(--spacing-xl)' }}>
            <button className="btn btn-primary">Mulai Chat</button>
            <button className="btn btn-outline">Lihat Demo</button>
          </div>
        </div>

        {/* Bagian Feature Grid yang sebelumnya hilang */}
        <div className="grid-3" style={{ marginTop: 'var(--spacing-lg)' }}>
          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Realtime Insight</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-md)', fontSize: '24px' }}>
              Respons cepat, konteks hukum jelas.
            </h3>
          </div>
          
          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Expert-like UI</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-md)', fontSize: '24px' }}>
              Tampilan elegan dengan interaksi halus.
            </h3>
          </div>
          
          <div className="card-dark">
            <span className="caption-uppercase" style={{ color: 'var(--color-body)' }}>Auto-kerning</span>
            <h3 className="display-md" style={{ marginTop: 'var(--spacing-md)', fontSize: '24px' }}>
              Teks yang nyaman dibaca dan tampak premium.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}