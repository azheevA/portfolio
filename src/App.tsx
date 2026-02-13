import NavBar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCard";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import AppShowcase from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Tensimonial";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
