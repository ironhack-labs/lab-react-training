import React from "react";
import "./ClickablePicture.css"


function ClickablePicture (props) {

    let imageA = require("../../assets/images/maxence.png").default
    return (
        <div>
            {/* <img src={img}></img> */}
            <img src={imageA}></img>
        </div>
    )
}

export default ClickablePicture

{/* <ClickablePicture
  img='../../assets/images/maxence.png'
  imgClicked='./assets/images/maxence-glasses.png'
/> */}