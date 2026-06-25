import { useEffect, useRef } from "react";
import pipelineTimeline from "../animations/pipelineTimeline";

export default function Pipeline() {
  const sectionRef = useRef();
  useEffect(() => { if(sectionRef.current && pipelineTimeline) pipelineTimeline(sectionRef.current); }, []);

  const steps = ["User Question", "Sentence-BERT", "Embedding Vector", "Semantic Search", "Knowledge Base", "Large Language Model", "Final Answer"];

  return (
    <section ref={sectionRef} className="section-band">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--spacing-lg)' }}>
        <div>
          <span className="caption-uppercase">Pipeline</span>
          <h2 className="display-lg" style={{ marginTop: "var(--spacing-xs)" }}>How It Works</h2>
          <p className="body-md" style={{ marginTop: "var(--spacing-sm)" }}>
            Setiap langkah dirancang untuk mengekstrak jawaban paling relevan dari regulasi hukum perlindungan anak.
          </p>
        </div>

        <div>
          {steps.map((step, index) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', padding: 'var(--spacing-md) 0', borderBottom: '1px solid var(--color-hairline)' }}>
              <div className="caption-uppercase" style={{ width: '40px', color: 'var(--color-body)' }}>{String(index + 1).padStart(2, '0')}</div>
              <div className="display-md" style={{ fontSize: '20px' }}>{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}