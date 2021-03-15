import React from 'react'

function Random(props) {
   
    // const min = props.min;
    // const max = props.max;

    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min) ;
    return (
        <div>
            <p> Random value between {props.min} and {props.max} => {randomNumber}</p>
        </div>

    )
       }
       
        
   



export default Random;
