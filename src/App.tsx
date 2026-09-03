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
     {/* Optimized ambient background lighting without GPU overloading */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden transform-gpu">
        <div className="absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-primary/10 blur-3xl md:h-140 md:w-140 md:blur-[100px]" />
        <div className="absolute top-[35%] right-[-10%] h-80 w-80 rounded-full bg-secondary/50 blur-3xl md:h-120 md:w-120 md:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-primary/5 blur-3xl md:h-120 md:w-120 md:blur-[100px]" />
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
