import { useState } from "react";
import img from "../../assets/images/maxence.png"
import imgClicked from "../../assets/images/maxence-glasses.png"
function ClickablePicture(){

    const[picture, setPicture] = useState(false);

    function handleClick() {
        setPicture(picture)
    }
  return(
        <div>
           
        </div>
    );
}

export default ClickablePicture;