import React from 'react';

const Randy = (props) => {
    const numb = (min, max)=> {
        return Math.floor(Math.random() * (props.max - props.min)) + props.min;
    }
    return (
        <div className="box-card"> 
          <h2> Random value between {props.min} and {props.max} is {numb(props.min)} </h2>  
        </div>
    )
}


export default function Random(){
    return (
        <div>
            <Randy min={1} max={6}/>
            <Randy min={1} max={100}/>
        </div>
    )
}