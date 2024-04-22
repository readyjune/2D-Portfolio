import React from 'react'
import './About.css'
import about_img from '../../assets/about_image.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {

  const openYouTubeVideo = () => {
    window.open("https://youtu.be/t1XtGj521a8?si=ZxQPHXSroRNgc_tQ", "_blank");
  };

  return (
    <div className='about'> 
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={openYouTubeVideo}/>

        </div>
        <div className="about-right">
            <h3>ABOUT ME</h3>
            <h2>Emi boyfriend</h2>
            <p>Software engineer with expertise in developing mobile and web applications, employing a variety of technologies  </p>
            <p>including Flutter, SwiftUI, Java, and React. Proven ability to leverage AWS for data visualisation and deliver innovative </p>
            <p> solutions through agile project management. Excels in translating complex requirements into user-friendly software. </p>
        </div>
    </div>
  )
}

export default About