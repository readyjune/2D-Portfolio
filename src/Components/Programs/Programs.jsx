import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.png'
import program_2 from '../../assets/program_2.png'
import program_3 from '../../assets/program_3.png'
import program_4 from '../../assets/car_counter.gif'
import program_5 from '../../assets/pose.gif'
import program_6 from '../../assets/HIVE_Screen.gif'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'



const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt=""/>
                <p>Omni Biotech - App Developer</p>
                <p>Real-time hydration testing</p>

            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt=""/>
                <p>ADBRI - iOS App Developer </p>
                <p>Real-time inventory management system</p>

            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt=""/>
                <p>Veritas - Web Developer</p>
                <p>Stock market prediction</p>

            </div>
        </div>
        <div className="program">
            <img src={program_4} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt=""/>
                <p>Machine Learning</p>
                <p>Highway Car Counter</p>

            </div>
        </div>
        <div className="program">
            <img src={program_5} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt=""/>
                <p>Machine Learning</p>
                <p>Curl Counter</p>

            </div>
        </div>
        <div className="program">
            <img src={program_6} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt=""/>
                <p>Curtin HIVE</p>
                <p>Virtual Tour & 3D Model</p>

            </div>
        </div>

        {/* Machine learning car counting */}
        {/* Machine learning muscle movement */}
        {/* Quockka face comparison */}
        {/* Curtin HIVE */}
        {/* P2P Networking */}
        {/*  */}


    </div>
  )
}

export default Programs