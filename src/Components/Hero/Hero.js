import React from 'react';
import './HeroStyle.css';
import img1 from '../../Assets/img1.avif'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={img1} alt='heroimage' />

        <div className='hero-content'>
            <h1>zomato</h1>
            <p>Find the best restaurants, cafés and bars in India</p>
        </div>
    </div>
  )
}

export default Hero
