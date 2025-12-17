import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkWithUs from "./components/WorkWithUs";
import OurStory from "./components/OurStory";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkWithUs />
      <OurStory />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
