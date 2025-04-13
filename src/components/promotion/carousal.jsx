import React, {useEffect, useRef} from 'react';
import './carousal.css';

 

//images from Assets
import img2 from '../../assets/carousal/img-2.svg';
import img3 from '../../assets/carousal/img-3.svg';
import img4 from '../../assets/carousal/img-4.svg';
import img5 from '../../assets/carousal/img-5.svg';

import img7 from '../../assets/carousal/img-7.svg';
import img8 from '../../assets/carousal/img-8.svg';
import img9 from '../../assets/carousal/img-9.svg';
import img10 from '../../assets/carousal/img-10.svg';



  const images = [
    { src: img2, alt: 'Logo 2' },
    { src: img3, alt: 'Logo 3' },
    { src: img4, alt: 'Logo 4' },
    { src: img5, alt: 'Logo 5' },
    { src: img7, alt: 'Logo 7' },
    { src: img8, alt: 'Logo 8' },
    { src: img9, alt: 'Logo 9' },
    { src: img10, alt: 'Logo 10' },

  ];
  const ImageCarousal = () => {
    return (
      <div className="image-carousal">
        <div className="image-carousal-inner">
          {[...images, ...images].map((image, index) => ( 
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageCarousal;