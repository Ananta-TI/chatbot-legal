import { useEffect } from "react";
import gsap from "gsap";

export default function usePointerMotion() {
  useEffect(() => {
    const setPointer = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      gsap.to(document.documentElement, {
        duration: 0.24,
        css: {
          "--pointer-x": `${x}%`,
          "--pointer-y": `${y}%`,
        },
        ease: "power2.out",
      });
    };

    window.addEventListener("pointermove", setPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", setPointer);
    };
  }, []);
}
