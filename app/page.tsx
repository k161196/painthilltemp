import Hero from "./components/LandingV2/Hero";
import Services from "./components/LandingV2/Services";
import Process from "./components/LandingV2/Process";
import Gallery from "./components/LandingV2/Gallery";
import FAQ from "./components/LandingV2/FAQ";
import CTA from "./components/LandingV2/CTA";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <CTA />
      <FAQ />
    </main>
  )
}
