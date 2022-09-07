import { useState } from "react";

function ClickablePicture (props) {
  let [img, setImg]= useState (props.img)

  function imageUpdate () {
    setImg (
       img === props.img ? props.imgClicked : props.img // revoir formule if / else en react
    )

/*    if(img === props.img) {
        img = props.imgClicked
    } else {
        img = props.img
    } */
  }
  
  return (
    <div>
      <img src={img} onClick={imageUpdate} alt="maxence" width="150"/>
    </div>
  )

}


export default ClickablePicture;