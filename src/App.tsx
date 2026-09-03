import "./App.css";
import Navbar from "#components/custom/Navbar";
import Hero from "#components/custom/Hero";
import TechMarquee from "#components/custom/TechMarquee";
import BuildDirection from "#components/custom/BuildDirection";
import About from "#components/custom/About";
import Work from "#components/custom/Work";
import Services from "#components/custom/Services";
// import Experience from "#components/custom/Experience";
import Contact from "#components/custom/Contacts";
import Footer from "#components/custom/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      {/* Ambient background lighting effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-10%] h-140 w-140 rounded-full bg-primary/10 blur-[100px] transition-all duration-700" />
        <div className="absolute top-[35%] right-[-10%] h-120 w-120 rounded-full bg-secondary/60 blur-[120px] transition-all duration-700" />
        <div className="absolute bottom-[-10%] left-[20%] h-120 w-120 rounded-full bg-primary/8 blur-[100px] transition-all duration-700" />
      </div>

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <BuildDirection />
         
          <Work />
          <Services />
          {/* <Experience /> */}
           <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
