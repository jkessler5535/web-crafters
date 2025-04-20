import React from 'react';
import Lottie from 'lottie-react';
import './lottie-comp.css';
import animationData from '/Users/jamiekessler/Downloads/Animation - 1744492085016.json';

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie animationData={animationData} loop={true}
        style={{ width: '100%', height: '100%'}}
        className='lottie-image' />
    </div>
  );
};

export default LottieAnimation;