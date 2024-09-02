import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/nav-bar";
import { Hero } from "./components/hero";
import About  from "./components/about";
import Experience  from "./components/experience";
import  Tech  from "./components/tech";
import { Feedbacks } from "./components/feedbacks";
import Works  from "./components/works";
import  Contact  from "./components/contact";
import { StarsCanvas } from "./components/canvas/stars";




export function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <div >
          <About /> 
          <Experience />
          <Tech />
          <Works /> 
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

