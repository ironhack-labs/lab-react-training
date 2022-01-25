import React, { useState } from 'react';
import './Carousel.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Carousel = ({ images }) => {
    const[current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    

    if(!Array.isArray(images || images.length <=0)){
        return null;
    }

    console.log(current);

  return (
    <section className="slider">
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevImage} />
    
     {images.map((img, index) => {

         return(
             <div key={index}>
             {index === current &&(
                <img key={index} src={img} alt=''className='image'/>
             )}  
             </div>
         )
   
     })}
     <FaArrowAltCircleRight className='right-arrow' onClick={nextImage}/>
    </section>
  );
};

export default Carousel;
