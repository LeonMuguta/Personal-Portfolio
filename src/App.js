import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"; 
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
