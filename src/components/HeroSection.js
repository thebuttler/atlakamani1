import React from 'react';
import '../App.css';
import './HeroSection.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './3.JPG'
import image2 from './2.JPG'
import image3 from './s.jpg'
import image4 from './1.JPG'
import image5 from './4.JPG'



function HeroSection() {
  return (
    <div className='hero-container'>
<AliceCarousel autoPlay autoPlayInterval="2000" infinite='true' fadeOutAnimation='true' keysControlDisabled='true'>
      <img src={image1} className="hero-container" alt='Good'/>
      <img src={image2} className="hero-container" alt='Good'/>
      <img src={image3} className="hero-container" alt='Good'/>
      <img src={image4} className="hero-container" alt='Good'/>
      <img src={image5} className="hero-container" alt='Good'/>      
</AliceCarousel>
    </div>
  )
}

export default HeroSection;
