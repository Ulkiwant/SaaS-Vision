import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Approche from "@/components/Approche";
import Pourquoi from "@/components/Pourquoi";
import Tarifs from "@/components/Tarifs";
import APropos from "@/components/APropos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Approche />
        <Pourquoi />
        <Tarifs />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
