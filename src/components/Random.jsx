import React from 'react'
import '../App.css'

function Random(props){
    return(
        <article className='Random'>
        <p>
        Random value between {props.min} and {props.max} is equal to:
        {Math.floor(Math.random() * (props.max - props.min)) + props.min}
         </p>
        </article>
    )
}
export default Random;