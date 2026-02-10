import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    {/* <section id="About">About</section> */}
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
