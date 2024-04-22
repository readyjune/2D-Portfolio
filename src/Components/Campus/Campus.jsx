import React, { useRef } from 'react'
import './Campus.css'
import gallery_1 from '../../assets/event_1.png'
import gallery_2 from '../../assets/event_2.png'
import gallery_3 from '../../assets/event_3.png'
import gallery_4 from '../../assets/event_4.png'
import gallery_5 from '../../assets/event_5.png'
import gallery_6 from '../../assets/event_6.png'
import gallery_7 from '../../assets/event_7.png'
import gallery_8 from '../../assets/event_8.png'
import gallery_9 from '../../assets/event_9.png'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'



const Campus = () => {

  const slider = useRef();
  const imageWidthPercent = 33; // The width of one image, in percentage of the gallery container

  const slide = (direction) => {
    // This function will handle both forward and backward navigation.
    const maxShift = -(imageWidthPercent * (totalImages - 3));
    const shiftAmount = direction * imageWidthPercent;

    // Update tx current value
    const newTx = Math.min(
      0,
      Math.max(tx.current + shiftAmount, maxShift)
    );

    tx.current = newTx;
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className='campus'>
        <div className="gallery">
          
      
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
            <img src={gallery_7} alt="" />
            <img src={gallery_8} alt="" />
            <img src={gallery_9} alt="" />

        </div>
  
    </div>
  )
}

export default Campus