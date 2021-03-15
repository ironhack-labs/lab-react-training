import React from 'react'

export default function Random(props) {

   function randomNumber(min, max){
        return min + Math.random() * (max-min)
   }

   return (
       <div>
           <b>Random value between 1 and 6: </b>{randomNumber(1, 6)}{props.min} <br/>
           <b>random value between 1 and 100: </b>{randomNumber(1, 100)}{props.max}
       </div>
   )
}
