import React, { useState } from "react";

function ClickablePicture({img, imgClicked}){
  const [state, setState] = useState(img)
  
  const toggleImg = () => {
    if (img === state){
      return setState(imgClicked)
    } else {
      return setState(img)
    }
  }

  return(
    <img onClick={toggleImg} src={state} alt="foto"></img>
  )
}

export default ClickablePicture