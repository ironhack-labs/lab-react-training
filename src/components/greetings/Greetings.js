import React from 'react';
import './Greetings.css';

//its functional, doesnt need extending component, dosnt have state
function Greetings(props){
    return (
        <div className="Greeting">
            <h1 lang={props.lang}>{props.children}</h1>
        </div>
    )
}
export default Greetings;