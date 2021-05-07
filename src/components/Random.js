import React from 'react';

export default function Greetings(props) {
    return (
        <div className="box">
            Random value between {props.min} and {props.max} => {Math.round(props.min + (Math.random() * (props.max - props.min)))}
        </div>
    )
}