import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";


export default function App() {
  return (
    
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      
    <div  className="fixed top-0 w-full h-full -z-10"></div>
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container relative z-20 px-8 mx-auto">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        </div>

      
    </div>
    </div>  
  );
}
