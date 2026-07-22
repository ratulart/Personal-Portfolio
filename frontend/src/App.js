import "@/App.css";
import SmoothScroll from "@/components/portfolio/SmoothScroll";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Marquee from "@/components/portfolio/Marquee";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import WhyHireMe from "@/components/portfolio/WhyHireMe";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function App() {
  return (
    <SmoothScroll>
      <div className="App" data-testid="portfolio-root">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Marquee />
          <Skills />
          <Certifications />
          <Education />
          <Achievements />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
