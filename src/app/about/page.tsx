import AboutHeader from "../components/AboutHeader";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import HowWeStarted from "../components/HowWeStarted";
import Results from "../components/Results";
import Reviews from "../components/Reviews";

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <HowWeStarted />
      <Results />
      <Reviews />
      <CTA />
      <Contact />
    </main>
  );
}
