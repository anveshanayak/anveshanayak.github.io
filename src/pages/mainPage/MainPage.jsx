import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Parallax from "../../components/parallax/Parallax";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="About">
      <About />
      </section>
    <section id="Projects">
      <Parallax />
    </section>
    <Projects />
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
