import React, { useState } from "react";

function Carousel({images}){

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