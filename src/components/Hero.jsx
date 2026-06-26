import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import MagneticEffect from "../context/MagneticEffect";

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
    <MagneticEffect>
      <span
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          group relative isolate inline-flex w-fit shrink-0 items-center justify-center
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
          className={`
            pointer-events-none absolute z-0 aspect-square w-[260%]
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
    </MagneticEffect>
  );

  if (to) {
    return (
      <Link to={to} className="inline-flex w-fit shrink-0">
        {buttonContent}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit shrink-0"
    >
      {buttonContent}
    </a>
  );
}
/* =========================
   HERO COMPONENT
========================= */
export default function Hero() {
  const containerRef = useRef(null);

  // ── Animasi Scroll Parallax (Atas-Bawah saat di-scroll) ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const paluScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  // ── Animasi Mouse Parallax (Gerak ngikutin kursor) ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring biar gerakannya halus/smooth (nggak kaku ngikut kursor)
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 50 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 50 });

  // Range pergerakan palu (misal max 40px ke kiri/kanan/atas/bawah). 
  // Nilainya dibalik [-1, 1] ke [40, -40] biar efeknya berlawanan arah mouse (lebih natural)
  const paluMouseX = useTransform(smoothX, [-1, 1], [40, -40]);
  const paluMouseY = useTransform(smoothY, [-1, 1], [40, -40]);

  // Fungsi untuk menangkap kordinat mouse
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    // Normalisasi posisi mouse agar berada di range -1 sampai 1 dari tengah layar
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove} // <-- Pasang deteksi mouse di area section ini
      className="min-h-screen flex flex-col justify-end pb-[72px] relative overflow-hidden bg-[#060608]"
    >
      {/* ── 1. Background (Scroll Parallax) ── */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-[15%] w-full h-[130%] bg-[url('/images/background3.png')] bg-cover bg-center z-[1] pointer-events-none"
      />

      {/* ── 2. Palu (Scroll + Mouse Parallax) ── */}
      <motion.div
        style={{ y: paluScrollY }} // Efek scroll di pasang di div pembungkus
        className="absolute inset-0 -top-[15%] w-full h-[130%] z-[4] pointer-events-none"
      >
        <motion.div
          style={{ x: paluMouseX, y: paluMouseY }} // Efek mouse dipasang di gambar langsung
          className="w-full h-full bg-[url('/images/palu3.png')] bg-cover bg-center"
        />
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