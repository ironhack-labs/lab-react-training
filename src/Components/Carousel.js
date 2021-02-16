import React, { useState } from 'react';

function Carousel({imgs}){
    const [carousel, setCarousel] = useState(imgs[0]);
    const toTheLeft = () =>{
        if(carousel === imgs[0]){
            setCarousel(imgs[imgs.length -1])
        }
        else{
            setCarousel(imgs[imgs.indexOf(carousel) -1])
        }
    }
    const toTheRight = () =>{
        if(carousel === imgs[imgs.length-1]){
            setCarousel(imgs[0])
        }
        else{
            setCarousel(imgs[imgs.indexOf(carousel) + 1])
        }
        console.log(carousel)
    }
    return(
        <div>
       <img alt="random" src={carousel}/>
       <div>
       <button type="button" onClick={toTheLeft}>Left</button>
       <button type="button" onClick={toTheRight}>Right</button>
       </div>
       </div>
    )
}
export default Carousel