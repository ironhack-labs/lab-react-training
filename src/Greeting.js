import React from 'react';
import './App.css';

function Greeting (props){
    return (
        <div className="greeting">
            lang: {props.lang},
            children: {props.children}
        </div>
    )
}

export default Greeting