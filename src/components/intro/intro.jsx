import React from 'react';
import LottieAnimation from '../Lottie-Animation/lottie-comp';
import './intro.css';



function Intro() {
    return (
        <div className="intro">
          <div className="intro-left">
            <h1>Launch Pixel-
              perfect sites
            </h1>
            <p>Rethink the web dev cycle with Webflow. Give your design and marketing teams the power to launch sophisticated sites quickly — so your dev team can focus on more complex work, not pixel-perfect revisions.</p>
          </div>
          <div className="intro-right">
            <LottieAnimation/>
          </div>
        </div>
    );
}

export default Intro;
