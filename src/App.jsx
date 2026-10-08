import { C } from "./data/siteData"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Crafts from "./components/Crafts"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Wave from "./components/ui/Wave"

export default function App() {
  const paper = {
    background: `radial-gradient(ellipse at 30% 20%, #F7EAD0 0%, ${C.parchment} 55%, ${C.sand} 100%)`,
    color: C.burnt,
    fontFamily: "'Tajawal', sans-serif",
  };

  return (
    <div dir="rtl" lang="ar" style={paper}>
      <Navbar />
      <Hero />
      <About />
      <Wave top={C.burnt} bottom={C.parchment} />
      <Crafts />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
