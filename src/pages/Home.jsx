import About from "../components/Home/About";
import Food from "../components/Home/Food";
import Hero from "../components/Home/Hero";
import ServiceSection from "../components/Home/ServiceSection";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Food />
      <ServiceSection />
      <Contact />
    </>
  );
}
