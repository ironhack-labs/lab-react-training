import React from 'react'
import './Random.css'


const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
   }

const Random = (props) => {

     return(
         <div className="Random">
            <p>Random value between {props.min} and {props.max} =&gt; {randomNumber(props.min, props.max)}</p>
         </div>

    )
}

export default Random