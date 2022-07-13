import React from 'react'

export default function Random(props) {
    const randomValue = Math.floor(Math.random() * (props.theRandom.max - props.theRandom.min + 1) + props.theRandom.min);
return(
    <span class="task3-1" >Random value between {props.theRandom.min} and {props.theRandom.max} is {randomValue}<br/></span>
)}



