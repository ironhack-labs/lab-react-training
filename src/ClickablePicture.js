import React from 'react'
import { useState } from 'react';


function Clickable ({img, imgClicked}) {
    const [image, setImage] = useState(img);
    const set=()=> setImage(!image)
    // const changeImg = () => {
    //     if (image === img) {
    //       setImage(imgClicked);
    //     }
    //     if (image === imgClicked) {
    //       setImage(img);
    //     }
    //   };
    return (
        <div style={{ height:'100px'}} >

     <img src={image ? img : imgClicked} onClick={set} />
        </div>
    )
}
const ClickablePicture=()=>{
    return (
        <div>
            <Clickable
            img='/img/persons/maxence.png'
            imgClicked='/img/persons/maxence-glasses.png'
            />
        </div>
    )
}

export default ClickablePicture;