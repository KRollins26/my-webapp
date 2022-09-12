import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='../../public/videos/video-1.mp4' autoPlay loop muted /> */}
        <h1> Hi. I'm Kieran. </h1>
        <p>I'm a Structural Engineer. </p>
        <div className="her-btns"> 
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                PROJECT MAP <i className= 'fa-solid fa-location-dot' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection