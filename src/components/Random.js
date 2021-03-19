import React from 'react';
import '../assets/css/Random.css'

const Random = ({min, max}) =>{

   const randomNumber = () => {
     
      return Math.floor(Math.random() * (max - min) + min);
   }

   return(
        <div className='Random'>
           <h4>Random value between {min} and {max} = {randomNumber()}</h4>
        </div>
   )
}
 
export default Random;