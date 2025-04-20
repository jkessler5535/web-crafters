import React from "react";
import './App.css'
import Header from "./components/header/header";
import Hero from "./components/hero-page/hero";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ImageCarousal from "./components/promotion/carousal";


function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <ImageCarousal/>
      <Intro/>
      <About/>
    
    
    </div>
  )
}

export default App;
