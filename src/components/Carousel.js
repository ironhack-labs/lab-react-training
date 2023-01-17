import React from 'react';
import { useState } from 'react';
import './Carousel.css'

function Carousel (props) {
    
    const [image, setImage] = useState(props.images[0]);
    const [i, setI]=useState(0)

    function handleLeftBtn(){
        if (i>0){setImage(props.images[i-1])
            setI(i-1)}
        else {setImage(props.images[props.images.length-1])
            setI(props.images.length-1)}
    }
function handleRightBtn(){
        if (i<props.images.length-1){setImage(props.images[i+1])
            setI(i+1)}
        else {setImage(props.images[0])
            setI(0)}
    }
      return (
      <div id='Carousel'>
        <img src={image} alt='carousel-img'/>
        <br/>
        <div>
        <button className='carouselBtn' onClick={handleLeftBtn}
        > Left </button>
        <button className='carouselBtn' onClick={handleRightBtn}> Right </button>
        </div>
      </div>         
   );
  }
  
  export default Carousel;

 