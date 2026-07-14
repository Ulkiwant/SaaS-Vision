import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Exemples from "@/components/Exemples";
import Approche from "@/components/Approche";
import Pourquoi from "@/components/Pourquoi";
import Comparatif from "@/components/Comparatif";
import Tarifs from "@/components/Tarifs";
import Parrainage from "@/components/Parrainage";
import Honnete from "@/components/Honnete";
import Faq from "@/components/Faq";
import APropos from "@/components/APropos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Exemples />
        <Approche />
        <Pourquoi />
        <Comparatif />
        <Tarifs />
        <Parrainage />
        <Honnete />
        <Faq />
        <APropos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
