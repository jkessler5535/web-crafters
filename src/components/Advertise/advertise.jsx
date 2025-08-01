import './advertise.css';

//Pages
import DiscovBtn from '../discover-btn/discover-btn';

function Advertise() {
    return (
        <div className="advertise-container">
            <div 
            className="diamond-advertise"></div>
              <h2>AI at Web Crafters</h2>
              <p>Elevate your site with AI embedded across the Web Crafters platform and extend its power with deep integrations with a growing ecosystem of AI-powered apps.</p>
              <div className="discover-ai-btn">
                    <DiscovBtn/> 
                </div>
        </div>
    );
}

export default Advertise;
