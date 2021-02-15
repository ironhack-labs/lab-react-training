import React, { useState } from 'react'

export default function ClickablePicture(props) {
   const {img, imgClicked} = props
   const [image, setImage] = useState(img)

   const handleOnClick = () =>{
    if(image === img){
        setImage(imgClicked)
    } else {
        setImage(img)
    }
   } 

    return (
        <div>
            <img src={image} onClick={handleOnClick} />
        </div>
    )
}