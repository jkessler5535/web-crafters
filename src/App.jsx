import './App.css'
import './index.css';


//Components
import Header from "./components/header/header";
import Hero from "./components/hero-page/hero";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ImageCarousal from "./components/promotion/carousal";
import Advertise from "./components/Advertise/advertise";




function App() {
  return (
    <div className="container">
       <Header /> 
       <Hero /> 
       <ImageCarousal /> 
       <Intro /> 
       <About /> 
       <Advertise /> 
      
    </div>
  )
}

export default App;
