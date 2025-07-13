import "./header.css";


//logos
import HeaderLogo from "../../assets/header/header-logo"; 

//import components
import SignUpBtn from "../sign-up-btn/sign-up-btn";



const toggleMenu = () => {
  console.log('Menu toggled');
  const navMenu = document.querySelector('.nav-bar');
  navMenu.classList.toggle('active');
};

function Header() {
  return (
    <div>
      <header>
        <HeaderLogo/> 
        <h3>Web Crafters</h3>
        <button className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className="nav-bar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#home">Log in</a></li>
          </ul>
        </nav>
        <SignUpBtn/>
      </header>
      <div className="header-divider"></div>
    </div>
  );
}

export default Header;
