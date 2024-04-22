import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Jinwoo Kim</h1>
            <p>
                Result-driven developer with extensive industry experience, committed to continual learning and diverse technological expertise.
            </p>
            <Link to='program' smooth={true} offset={-270} duration={500} className='btn'>
                Explore more <img src={dark_arrow} alt="" />
            </Link>
        </div>

    </div>
  )
}

export default Hero