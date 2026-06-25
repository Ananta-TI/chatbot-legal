import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background gerak tipis banget buat efek kedalaman (3D feel)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Shikigami gerak lambat ke atas
  const shikigamiY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  // Higuruma sengaja DIBUANG efek paralaksnya biar kakinya nggak kelihatan terpotong

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-end pb-[72px] relative overflow-hidden bg-[#060608]"
    >
      {/* ── 1. Background (Parallax Halus) ── */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-[15%] w-full h-[130%] bg-[url('/images/background3.png')] bg-cover bg-center z-[1] pointer-events-none "
      />

      {/* ── 2. Shikigami — Parallax ── */}
      {/* <motion.div
        style={{ y: shikigamiY }}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start z-[2] pointer-events-none pt-[5vh]"
      >
        <div 
          className="w-[min(900px,90vw)] h-[80%] bg-[url('/images/sikigami2.png')] bg-contain bg-top bg-no-repeat mix-blend-screen grayscale"
        />
      </motion.div> */}

      {/* ── 3. Higuruma — STATIC (Dikunci di bawah) ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(560px,65vw)] h-[75%] bg-[url('/images/higuruma2.png')] bg-contain bg-bottom bg-no-repeat z-[3] pointer-events-none "
      />

      {/* ── 4. Gradient dari bawah ── */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65%] bg-[linear-gradient(to_top,#060608_0%,rgba(6,6,8,0.9)_35%,rgba(6,6,8,0.3)_65%,transparent_100%)] z-[4] pointer-events-none"
      />

      {/* ── 5. Content ── */}
      <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-extrabold text-white leading-[1.05] tracking-[-0.03em] text-[clamp(18px,4vw,36px)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-6"
        >
          Sistem Question Answering Hukum Perlindungan Anak Berbasis LLM.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
          className="max-w-[480px] text-[15px] leading-[1.65] text-white/60 mb-8"
        >
          Platform AI yang membantu masyarakat memahami hukum perlindungan anak
          dengan insight yang jelas, cepat, dan dapat dipercaya.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <Link
            to="/chatbot"
            className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-6 py-3 rounded-lg font-semibold text-[14px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            Mulai Chat
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <a
            href="#dataset"
            className="inline-flex items-center bg-white/5 text-white/80 px-6 py-3 rounded-lg font-medium text-[14px] border border-white/15 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30"
          >
            Lihat Dataset
          </a>
        </motion.div>
      </div>
    </section>
  );
}