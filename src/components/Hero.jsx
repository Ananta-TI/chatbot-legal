import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

/* =========================
   REVEAL BUTTON (DISESUAIKAN UNTUK DARK THEME)
   Mouse-follow circle reveal per button
========================= */
function RevealButton({
  children,
  href,
  to,
  variant = "secondary",
  size = "md",
  className = "",
 }) {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  const variants = {
    primary: {
      wrapper:
        "border-brand-accent bg-transparent text-brand-accent hover:border-brand-accent",
      circle: "bg-brand-accent",
      initialText: "var(--color-brand-accent)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-accent",
    },
    secondary: {
      wrapper:
        "border-brand-text/35 bg-transparent text-brand-text hover:border-brand-text/65",
      circle: "bg-brand-text",
      initialText: "var(--color-brand-text)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-text",
    },
    ghost: {
      wrapper:
        "border-brand-border bg-brand-surface/20 text-brand-text hover:border-brand-accent",
      circle: "bg-brand-accent",
      initialText: "var(--color-brand-text)",
      hoverText: "var(--color-brand-bg)",
      classText: "text-brand-text",
    },
  };

  const sizes = {
    sm: "min-h-[42px] px-5 py-2.5 text-[11px]",
    md: "min-h-[52px] px-7 py-3.5 text-[12px] sm:px-8 sm:py-4",
    lg: "min-h-[60px] px-9 py-4 text-[13px] sm:px-10 sm:py-5",
  };

  const selectedVariant = variants[variant] || variants.secondary;
  const selectedSize = sizes[size] || sizes.md;

  const getPointerPosition = (event) => {
    if (!buttonRef.current) return { x: 0, y: 0 };
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const moveCircle = (event, immediate = false) => {
    if (!circleRef.current) return;
    const { x, y } = getPointerPosition(event);

    if (immediate) {
      gsap.set(circleRef.current, {
        left: x,
        top: y,
        xPercent: -50,
        yPercent: -50,
      });
      return;
    }

    gsap.to(circleRef.current, {
      left: x,
      top: y,
      duration: 0.16,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = (event) => {
    if (!circleRef.current || !textRef.current) return;

    gsap.killTweensOf(circleRef.current);
    gsap.killTweensOf(textRef.current);
    moveCircle(event, true);

    gsap.set(circleRef.current, {
      scale: 0,
      opacity: 1,
    });

    gsap.set(textRef.current, {
      color: selectedVariant.hoverText,
    });

    gsap.to(circleRef.current, {
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (event) => {
    moveCircle(event);
  };

  const handleMouseLeave = (event) => {
    if (!circleRef.current || !textRef.current) return;

    gsap.killTweensOf(circleRef.current);
    gsap.killTweensOf(textRef.current);
    moveCircle(event, true);

    gsap.set(textRef.current, {
      color: selectedVariant.initialText,
    });

    gsap.to(circleRef.current, {
      scale: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(circleRef.current, {
          opacity: 0,
        });
      },
    });
  };

  const buttonContent = (
    <span
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative isolate inline-flex w-fit shrink-0 items-center justify-center
        overflow-hidden rounded-full border
        font-semibold uppercase leading-none tracking-[0.18em]
        transition-[border-color,box-shadow,transform] duration-300
        active:translate-y-[1px]
        ${selectedSize}
        ${selectedVariant.wrapper}
        ${className}
      `}
    >
      <span
        ref={circleRef}
        className={`pointer-events-none absolute z-0 aspect-square w-[260%]
          rounded-full opacity-0
          ${selectedVariant.circle}
        `}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(0)",
        }}
      />
      <span
        ref={textRef}
        className={`
          relative z-10 flex items-center justify-center gap-2
          whitespace-nowrap
          ${selectedVariant.classText}
        `}
      >
        {children}
      </span>
    </span>
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return <a href={href}>{buttonContent}</a>;
}

/* =========================
   DATA PALU STATIS (TIDAK BERUBAH SAAT REFRESH)
========================= */
const FIXED_GAVELS = [
  // --- GEROMBOLAN KIRI ---
  { id: 1, top: "15%", left: "15%", scale: 1.4, rotate: 340 },
  { id: 2, top: "25%", left: "8%", scale: 1, rotate: 115 },
  { id: 3, top: "28%", left: "25%", scale: 1.5, rotate: 315 },
  { id: 4, top: "45%", left: "12%", scale: 1.3, rotate: 100 }, 
  { id: 5, top: "42%", left: "28%", scale: 0.6, rotate: 300 },
  { id: 6, top: "58%", left: "18%", scale: 2.8, rotate: 135 },
  { id: 7, top: "68%", left: "5%", scale: 0.5, rotate: 350 },
  { id: 8, top: "78%", left: "15%", scale: 0.9, rotate: 225 },
  { id: 9, top: "82%", left: "28%", scale: 0.4, rotate: 330 },
  { id: 10, top: "20%", left: "32%", scale: 0.3, rotate: 160 }, 
  { id: 11, top: "62%", left: "33%", scale: 1.35, rotate: 195 }, 
  { id: 12, top: "35%", left: "2%", scale: 1.45, rotate: 175 },

  // --- GEROMBOLAN KANAN ---
  { id: 13, top: "12%", left: "82%", scale: 1.6, rotate: 140 },
  { id: 14, top: "18%", left: "92%", scale: 1.4, rotate: 345 },
  { id: 15, top: "28%", left: "75%", scale: 1.5, rotate: 200 },
  { id: 16, top: "35%", left: "86%", scale: 1.4, rotate: 335 }, 
  { id: 17, top: "48%", left: "76%", scale: 1.7, rotate: 155 },
  { id: 18, top: "52%", left: "95%", scale: 1.5, rotate: 320 },
  { id: 19, top: "65%", left: "85%", scale: 0.8, rotate: 115 },
  { id: 20, top: "68%", left: "70%", scale: 0.4, rotate: 300 },
  { id: 21, top: "82%", left: "88%", scale: 2.9, rotate: 235 },
  { id: 22, top: "86%", left: "76%", scale: 0.5, rotate: 340 },
  { id: 23, top: "18%", left: "68%", scale: 0.3, rotate: 290 }, 
  { id: 24, top: "58%", left: "66%", scale: 2.35, rotate: 180 }, 
];

/* =========================
   HERO COMPONENT
========================= */
export default function Hero() {
  const containerRef = useRef(null);
  // State untuk menyimpan ID palu yang sedang meledak
  const [explodedGavels, setExplodedGavels] = useState({});

  // ── Animasi Scroll Parallax (Atas-Bawah saat di-scroll) ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const paluScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 2.15]);

  // Fungsi yang dijalankan ketika user melepas palu setelah ditarik
  const handleDragEnd = (id) => {
    // Set true untuk mengaktifkan animasi meledak di ID palu tertentu
    setExplodedGavels((prev) => ({ ...prev, [id]: true }));

    // Hapus ID setelah animasi ledakan selesai (400ms) agar bisa diulang lagi nanti
    setTimeout(() => {
      setExplodedGavels((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }, 400);
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-end pb-[72px] relative overflow-hidden bg-[#060608]"
    >
      {/* ── 1. Background (Scroll Parallax + Zoom) ── */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 -top-[15%] w-full h-[130%] bg-[url('/images/background3.png')] bg-cover bg-center z-[1] pointer-events-none origin-center"
      />

      {/* ── 2. Palu (Posisi Tetap + Drag & Snap Back + Shockwave Effect) ── */}
      <motion.div
        style={{ y: paluScrollY }} 
        className="absolute inset-0 -top-[15%] w-full h-[130%] z-[3] pointer-events-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          {FIXED_GAVELS.map((gavel) => (
            <div
              key={gavel.id}
              className="absolute pointer-events-auto"
              style={{
                top: gavel.top,
                left: gavel.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* EFEK CAHAYA MELEDAK / SHOCKWAVE (Ditaruh di belakang palu) */}
              <AnimatePresence>
                {explodedGavels[gavel.id] && (
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ 
                      scale: gavel.scale * 2.8, // Ukuran ledakan menyesuaikan skala palu
                      opacity: 0 
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                    className="absolute inset-0 m-auto w-24 h-24 rounded-full pointer-events-none z-0"
                    style={{
                      // Menggunakan kombinasi gradasi radial putih & emas transparan untuk efek kilauan magis
                      background: "radial-gradient(triangle, rgba(212,175,55) 0%, rgba(212,175,55) 100%, transparent 100%)",
                      filter: "blur(1px)"
                    }}
                  />
                )}
              </AnimatePresence>

              {/* KOMPONEN UTAMA PALU */}
              <motion.div
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.6}
                dragTransition={{ bounceStiffness: 450, bounceDamping: 14 }}
                onDragEnd={() => handleDragEnd(gavel.id)} // <--- Pemicu efek ledakan cahaya
                style={{
                  rotate: gavel.rotate,
                  scale: gavel.scale,
                }}
                whileHover={{ scale: gavel.scale * 1.05 }}
                whileTap={{ scale: gavel.scale * 1.15, cursor: "grabbing" }}
                className="w-20 h-20 sm:w-28 sm:h-28 bg-[url('/images/palu4.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-grab relative z-10"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 3. Higuruma — STATIC ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(560px,65vw)] h-[75%] bg-[url('/images/higuruma2.png')] bg-contain bg-bottom bg-no-repeat z-[3] pointer-events-none"
      />
      
      {/* ── 4. Gradient dari bawah ── */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65%] bg-[linear-gradient(to_top,#060608_0%,rgba(6,6,8,0.9)_35%,rgba(6,6,8,0.3)_65%,transparent_100%)] z-[4] pointer-events-none"
      />

      {/* ── 5. Content ── */}
      <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-extrabold text-white leading-[1.05] tracking-[-0.03em] text-[clamp(18px,4vw,36px)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-6"
        >
          Sistem Question Answering Hukum Perlindungan Anak Berbasis LLM.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
          className="max-w-[480px] text-[15px] leading-[1.65] text-white/60 mb-8"
        >
          Platform AI yang membantu masyarakat memahami hukum perlindungan anak
          dengan insight yang jelas, cepat, dan dapat dipercaya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <RevealButton
            to="/chatbot"
            variant="primary"
            size="md"
          >
            Mulai Chat
            <ArrowRight size={16} />
          </RevealButton>
        </motion.div>
      </div>
    </section>
  );
}