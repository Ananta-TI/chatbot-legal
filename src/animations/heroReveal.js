import gsap from "gsap";
import SplitType from "split-type";

export default function heroReveal(element) {
  const split = new SplitType(element, {
    types: "chars",
  });

  gsap.from(split.chars, {
    y: 120,
    opacity: 0,
    stagger: 0.02,
    duration: 1.2,
    ease: "power4.out",
  });
}