import React from 'react';
import "./about.css";



//Import icons
import CursorIcon from '../../assets/about-icons/cursor-icon.jsx';
import RocketIcon from '../../assets/about-icons/rocket-icon.jsx';
import OptiIcon from '../../assets/about-icons/optimize-icon.jsx';
import ScaleIcon from '../../assets/about-icons/scale.jsx';

function About() {
    return (
        <div className="about-section">
            <div className="block 1">
            <CursorIcon/>
              <h2>Design & Build</h2>
              <p>Take full creative control.
              Designers can dive into HTML, CSS, and JavaScript visually, while marketers build with reusable, brand-approved components—no code required.</p>
            </div>
            <div className="block 2">
              <RocketIcon/> 
            <h2>Publish & Edit</h2>
              <p>Update content your way.
              Use Webflow’s CMS to manage content visually in the Designer or automate it through powerful headless APIs—perfect for scaling teams.</p>
            </div>
            <div className="block 3"> 
              <OptiIcon/>
            <h2>Analyze & Optimize</h2>
              <p>Turn your site into a growth engine.
              Unlock built-in tools for AI personalization, A/B testing, SEO, localization, and more—all designed to help you convert and scale.</p>
            </div>
            <div className="block 4"> 
              <ScaleIcon/>
              <h2>Scale & Collaborate</h2>
              <p>Build for today, grow for tomorrow.
              With 15,000+ sites launched every hour, Webflow is built to scale. Rely on enterprise-grade hosting, security, and seamless integrations.</p>
            </div>
        </div>
    );
}

export default About;