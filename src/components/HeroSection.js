import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='../../public/videos/video-1.mp4' autoPlay loop muted /> */}
        <h1> Hi Im Kieran Rollins </h1>
        <p>Im a Structural Engineer</p>
        <div className="her-btns"> 
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                WHAT I DO
            </Button>
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                MAP <i className= 'far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection