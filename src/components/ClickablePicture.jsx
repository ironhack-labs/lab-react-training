import { useState } from "react";
import clickableImage from '../assets/images/maxence.png'
import clickableImage2 from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
  const [Img, setImg] = useState(false)
  const imgChangeHandler = () => !Img ? setImg(true) : setImg(false)

  return ( 
    <div>
      <img onClick={imgChangeHandler}src={!Img ? clickableImage: clickableImage2} alt="pic" />
    </div>
  );
}

export default ClickablePicture;