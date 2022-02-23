import React from 'react'
import { useState } from 'react'

export default function ClickablePicture({img, imgClicked}) {

    let [image, setImage] = useState(img)

    const imageHandler =() =>{
        image === img? setImage(imgClicked) : setImage(img)
    }

    return (
        <>
            <div>ClickablePicture</div>
            <img src={image} alt="user" onClick={imageHandler}/>
        </>
    )
}
