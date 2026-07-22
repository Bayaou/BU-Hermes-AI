import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <About />

      <CTA />

      <Footer />
    </>
  );
}