import React from 'react';
import './hero.css';



//Components
import BuildBtn from '../start-build-btn/build-btn.jsx';





function Hero() {
    return (
        <div className="hero">
            <h3>More Than a Website Builder</h3>
            <h2>Transform Your Vision Into a Stunning Website</h2>
            <p>Webflow is a pioneering platform that empowers marketers, designers, and developers to collaboratively create, manage, and refine high-impact web experiences — all in one place.</p>
            <BuildBtn/> 
          
        </div>
    );
}

export default Hero;
