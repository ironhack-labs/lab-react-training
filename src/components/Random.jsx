import React from 'react';



function Random({min,max}){
    let ran = Math.floor(Math.random() * max) + 1;
    
     return (
         <div className="random"> <p>Random value between {min} and {max} = {ran}</p>
         </div>)
    }

   

export default Random;