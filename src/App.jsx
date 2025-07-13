import React from "react";
import './App.css'
import './index.css';


//Components
import Header from "./components/header/header";
import Hero from "./components/hero-page/hero";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ImageCarousal from "./components/promotion/carousal";
import Advertise from "./components/Advertise/advertise";
import Tools from "./components/website-tools/tools";



function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ImageCarousal/>
      <Intro/>
      <About/>
      <Advertise/>
      <Tools/>
      
    </div>
  )
}

export default App;
