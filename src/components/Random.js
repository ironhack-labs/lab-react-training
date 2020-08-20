import React from 'react'
import './components.css'


function Random(props){

   let randomValue = Math.floor((Math.random() * (props.max - props.min)) + props.min)
    

    return ( 
        <div className = "random-container">
            
            <p>Random value between {props.min} and {props.max} => {randomValue}</p>
            
          
        </div>
    )
}

export default Random;