import React from 'react';

const Greetings = props => {
    return (
        <div className = "greetings">
            <div>
                <h3>{props.lang} {props.children}</h3>
            </div>
        </div>
    )
}

export default Greetings;