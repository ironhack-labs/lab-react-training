import React from 'react';
import "./Carousel.css"


export function Carousel ({imgs}) {

  const [imgState, imgSetState] = React.useState(imgs[0])
  const [numberPhoto, numberPhotoSetState] = React.useState(0)

  
    const nextItem = () => {

        var numberNext = numberPhoto;
        numberNext++;
        if(numberNext > imgs.length-1){

          numberNext = 0
        }
        numberPhotoSetState(numberNext);


        return <img src={imgSetState(imgs[numberNext])} photoNumber={numberPhoto} alt="carrousel"/> ;
      
      
    };


    const prevItem = () => {

      var numberNext = numberPhoto;
      numberNext--;
      if(numberNext < 0){

        numberNext = imgs.length-1
      }
      numberPhotoSetState(numberNext);


      return <img src={imgSetState(imgs[numberNext])} photoNumber={numberPhoto} alt="carrousel"/> ;
    
    
  };

    return (
       <div >  
          <button onClick={prevItem}>Prev Image</button>

         <img src={imgState} photoNumber={numberPhoto} alt="carrousel"/> 

           <button onClick={nextItem}>next Image</button>

       </div>

     )
}