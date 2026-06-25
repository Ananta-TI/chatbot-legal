import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

export default function CursorBlob() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, width: '500px', height: '500px',
        borderRadius: '50%', backgroundColor: 'rgba(218, 41, 28, 0.03)', /* Hint of Rosso Corsa */
        filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0
      }}
      animate={{ x: x - 250, y: y - 250 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}