import React, { useState } from "react";

const images = [
  'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
]

function Carousel(){

const [imageNumber, setImageNumber] = useState(0)

function scrollLeft(){
  if (imageNumber>0){
  setImageNumber(imageNumber-1)
  }
}

function scrollRight(){
  if (imageNumber<images.length-1){
    setImageNumber(imageNumber+1)
    }
}

    return(
<div>

<button onClick={scrollLeft}>⬅️</button>

<img src={images[imageNumber]} alt='carousel'/> 

<button onClick={scrollRight}>➡️</button>

</div>
    ) 
}

export default Carousel;