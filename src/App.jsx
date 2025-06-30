import React from "react";
import './App.css'
import './index.css';


//Components
import Header from "./components/header/header";
import Hero from "./components/hero-page/hero";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ImageCarousal from "./components/promotion/carousal";
import CustomerReviews from "./components/customer-review/customerReviews";


function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <ImageCarousal/>
      <Intro/>
      <About/>
      <CustomerReviews/>
    
    
    </div>
  )
}

export default App;
