import './hero.css';



//Components
import BuildBtn from '../start-build-btn/build-btn.jsx';




function Hero() {
    return (
        <div className="hero">
            <h3>More Than a Website Builder</h3>
            <h1>Transform Your Vision Into a Stunning Website</h1>
            <p>Webflow is a pioneering platform that empowers marketers, designers, and developers to collaboratively create, manage, and refine high-impact web experiences — all in one place.</p>
            <div className="hero-btns">
                <BuildBtn/> 
                <a href="#" id="contact">Contact Sales</a>
            </div>
        </div>
    );
}

export default Hero;
