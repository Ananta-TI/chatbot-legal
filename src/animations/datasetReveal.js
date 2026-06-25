import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function datasetReveal(section) {
  const cards = section.querySelectorAll(".dataset-card");

  gsap.from(cards, {
    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
    },
  });
}