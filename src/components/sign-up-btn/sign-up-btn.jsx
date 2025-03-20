import React from "react";
import "./sign-up-btn.css";


const SignUpBtn = ()=> {
  const handleClick = ()=> {
    alert('Sign up button clicked!');
  }
  return (
    <button onClick={handleClick} className="sign-up-btn">
      Get started - it's free
    </button>
  );
}

export default SignUpBtn;