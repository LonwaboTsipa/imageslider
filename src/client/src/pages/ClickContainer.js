import React from 'react'
import '../assets/app.css';
const ClickContainer = (props) => { 
  return <div className="clickContainer">
  <div className="firstHalf" onClick={props.goToPrevSlide}></div>
  <div className="secondHalf" onClick={props.goToNextSlide}></div>
</div>
}

export default ClickContainer