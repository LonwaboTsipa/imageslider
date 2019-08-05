import React from 'react';
import '../assets/app.css';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
         <div className="tooltip">
            <span className="tooltiptext leftArrowTooltip">PREVIOUS</span>
        </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
    </div>
  );
}


export default LeftArrow;

