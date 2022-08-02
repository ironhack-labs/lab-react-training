import React, { useState } from 'react';
import maxence from "../assets/images/maxence.png"
import maxenceClick from "../assets/images/maxence-glasses.png"

const ClickablePicture = () => {
    const [pic, setPic] = useState(maxence);
    return(  
        <div>
            <img className='pic' src={pic} alt="guy" onClick={(e) => setPic((prevPic) => prevPic === maxence ? prevPic = maxenceClick : prevPic = maxence)} />
        </div>
    )
}

/* ClickablePicture(props) {

    const [showImg, setShowImg] = useState(true)
    function handleClick() {
        setShowImg(!showImg)
    }

    return (
        <img onClick={handleClick} height="328px" width="328px" 
        src= {showImg ? props.img : props.imgClicked} alt="pic" />
    )
} */

/*import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [showImage, setShowImage] = useState(true); 
  function handleClick() {
    setShowImage(!showImage);
  } 

  return (
    <img
      src={showImage ? { img } : { imgClicked }} 
      alt="clickable picure"
      onClick={handleClick}
      style={{ width: 100, height: 100 }}
    />
  );
}*/

export default ClickablePicture;
