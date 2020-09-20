import React from 'react';
import './Random.css';

export default function Random(props) {
        const result = Math.floor(Math.random() * (props.max - props.min) + props.min)


        return (
            <div className="Random-iteration">
             <p>Random value between {props.min} and {props.max} {'=>'} {result}</p>
            </div>
        )
}