import React, { useState } from 'react';



function Carousel({images}) {
 
 
    
 
  let [index, setIndex] = useState(0);


  const switchLeft = () => {
   
   if(index === 0) {
       index = images.length-1
      
   } else {
      index = index -1
      
   }
         setIndex(() =>  index  )
       
     
      
  } 

  const switchRight = () => {
   
   if(index === images.length-1) {
       index = 0
      
   } else {
      index = index +1 
      
   }
         setIndex(() =>  index  )
       
     
      
  } 
  

  return (
    <div className="image">
   <button onClick={switchLeft}>Left</button>
       <img src={images[index]}></img>
         <button onClick={switchRight}>Right</button>
    </div>
  );
}


export default Carousel;