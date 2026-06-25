import Hero from "../components/Hero";
import CursorBlob from "../components/CursorBlob";
import ScrollProgress from "../components/ScrollProgress";
import useLenis from "../hooks/useLenis";
import usePointerMotion from "../hooks/usePointerMotion";
import Dataset from "../components/Dataset";
import Pipeline from "../components/Pipeline";
import CTA from "../components/CTA";
import Evaluation from "../components/Evaluation";
import Team from "../components/Team";

export default function LandingPage() {
  useLenis();
  usePointerMotion();

  return (
    <main className="scroll-container">
      <ScrollProgress />
      <CursorBlob />
      <Hero />
      <Pipeline />
      <Dataset />
      <Evaluation />
      <Team />
      <CTA />
    </main>
  );
}