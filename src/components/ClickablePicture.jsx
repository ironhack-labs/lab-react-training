import React from 'react'
import '../assets/css/ClickablePicture.css'

const LikeButton = ({img, imgClicked, clickImage, isClicked}) => {

    return (
      <div className='ClickablePicture px-3 py-3' onClick={clickImage}>
          {isClicked ? 
          <img src={imgClicked} alt='background'/> :
          <img src={img} alt='added'/>}
      </div>
    )
  }

export default LikeButton