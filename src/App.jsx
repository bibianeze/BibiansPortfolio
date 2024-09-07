
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';


function App() {


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-green-200 selection:text-green-950">
      <div className=" h-full w-full">
        <div className=" h-full w-screen bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="w-11/12 mx-auto container  px-3 md:px-8">
            <Navbar />
            <Hero />
            <About/>
            <Technologies/>
            <Experience/>
            <Projects/>
            <Contact />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App
