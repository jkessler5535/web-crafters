import React from "react";
import './App.css'
import Header from "./components/header/header";
import Hero from "./components/hero-page/hero";
import ImageCarousal from './components/promotion/carousal.jsx';

function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <ImageCarousal />
    
    </div>
  )
}

export default App;
