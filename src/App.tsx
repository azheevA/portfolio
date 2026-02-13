import NavBar from "./components/Navbar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCard";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import AppShowcase from "./sections/ShowcaseSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  );
}

export default App;
