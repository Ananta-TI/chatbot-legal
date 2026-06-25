import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function pipelineTimeline(section) {
  const items = section.querySelectorAll(".pipeline-item");

  gsap.from(items, {
    opacity: 0,
    y: 120,
    stagger: 0.25,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
    },
  });
}