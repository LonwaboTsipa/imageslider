import React from 'react'
import '../assets/app.css';
const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(${image.imageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
    

  return <div className="slide" style={styles}></div>
}

export default Slide

