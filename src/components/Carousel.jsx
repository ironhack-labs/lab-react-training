import React from 'react'
import { useState } from 'react'

import './Carousel.css'

export default function Carousel({images}) {
    const [imageIndex, setImageIndex]  = useState(0)
    const changeImageIndex = (direction) =>{
        if(imageIndex+direction>=0 && imageIndex+direction<images.length){
            setImageIndex(imageIndex+direction)
            console.log(imageIndex)
        }
    }

  return (
    <div className="carousel">
        {images.map(image=><img src={image} key={image} alt="carousel image" style={{transform:`translateX(-${imageIndex*225}px)`}}/>)}
        <div className="button minus" onClick={()=>changeImageIndex(-1)}>-</div>
        <div className="button plus" onClick={()=>changeImageIndex(1)}>+</div>
    </div>
  )
}
