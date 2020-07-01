import React from 'react';
import ReactDOM from 'react-dom';

const Greetings = props => {
    return (
        <div className="greetings">
            <h1 lang={props.lang}>{props.children}</h1>
        </div>
    )
}
export default Greetings;