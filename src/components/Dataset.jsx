import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import datasetReveal from "../animations/datasetReveal";

export default function Dataset() {
  const sectionRef = useRef();

  useEffect(() => {
    if(sectionRef.current && datasetReveal) datasetReveal(sectionRef.current);
  }, []);

  return (
    <section id="dataset" ref={sectionRef} className="section-band section-light">
      <div className="container">
        <motion.span initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} className="caption-uppercase">
          Dataset
        </motion.span>
        
        <h2 className="display-lg" style={{ marginTop: 'var(--spacing-xs)' }}>
          Arsitektur Pengetahuan.
        </h2>
        <p className="body-md" style={{ marginTop: 'var(--spacing-xs)', maxWidth: '600px', marginBottom: 'var(--spacing-lg)' }}>
          Dataset hukum perlindungan anak yang digunakan sebagai knowledge base utama untuk menjawab setiap pertanyaan dengan akurasi tinggi.
        </p>

        <div className="grid-4">
          {[{v: "700+", l: "QA Pairs"}, {v: "8", l: "Atribut Dataset"}, {v: "SBERT", l: "Embedding Search"}, {v: "LLM", l: "Generation"}].map((item, i) => (
             <div key={i} style={{ padding: 'var(--spacing-lg) 0', borderTop: '1px solid var(--color-hairline-light)' }}>
                <h3 className="display-mega" style={{ color: 'var(--color-body-on-light)', letterSpacing: '-2px' }}>{item.v}</h3>
                <p className="caption-uppercase" style={{ marginTop: 'var(--spacing-xs)' }}>{item.l}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}