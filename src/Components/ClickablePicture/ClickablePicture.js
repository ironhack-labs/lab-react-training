import { useState } from "react";

function ClickablePicture({img, imgClicked}){

    const[picture, setPicture] = useState(img);

    function handleClick() {
        if (picture === img){
            setPicture(imgClicked)
        } else if (picture === imgClicked){
            setPicture(img)
        }
    }
  return (
    <div>
      <img src={picture} onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;