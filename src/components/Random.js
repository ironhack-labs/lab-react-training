import React from 'react'
import PropTypes from 'prop-types';
import './components.css'


export default function Random(props){

    Random.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        randomNumber: PropTypes.number
    }

   
    function randomValue(){
        return props.randomNumber = Math.floor((Math.random() * (props.max - props.min)) + props.min) 
    }

    return ( 
        <div className = "random-container">
            
            <p>Random value between {props.min} and {props.max} => {() => props.randomValue()}</p>
            
          
        </div>
    )
}


