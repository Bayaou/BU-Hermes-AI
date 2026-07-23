// src/pages/Home.tsx
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}