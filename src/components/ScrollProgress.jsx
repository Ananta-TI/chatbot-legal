import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '3px',
        backgroundColor: 'var(--color-primary)',
        transformOrigin: '0%',
        zIndex: 100
      }}
    />
  );
}