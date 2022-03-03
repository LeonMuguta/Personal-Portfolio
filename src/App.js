import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"; 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
