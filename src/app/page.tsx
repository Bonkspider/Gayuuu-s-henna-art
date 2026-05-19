import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Gallery from "@/sections/Gallery";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}