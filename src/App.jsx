import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Projects - Experiences' title='App / Web Developer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Event' title='Event Photos'/>
        <Campus/>
        {/* <Title subTitle='Achievements' title='Awards'/>
        <Testimonials/> */}
        <Title subTitle='Contact Me' title='"Submit" button will actually send to my email!'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App