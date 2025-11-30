import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Works from "@/sections/Works";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import SocialMedia from "@/components/SocialMedia";
import UtilityBar from "@/components/UtilityBar";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
      <Footer />
      <div className="fixed bottom-1/12 left-3 z-500 hidden md:block lg:left-10">
        <SocialMedia />
      </div>
      <div className="fixed right-3 bottom-1/12 z-500 hidden md:block lg:right-10">
        <UtilityBar />
      </div>
    </div>
  );
}
