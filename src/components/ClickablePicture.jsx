import { useState } from "react";
import img1 from '../assets/images/maxence.png'
import img2 from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {
  const [active, setActive] = useState(false)
  const handleClickActive = () => !active ? setActive(true) : setActive(false)

  return ( 
    <div>
      <img onClick={handleClickActive}src={!active ? img1: img2} alt="pic" />
    </div>
  );
}

export default ClickablePicture;