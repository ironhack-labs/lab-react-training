import React from 'react';

const Random = props => {
    return (
        <div className = "greetings">
            <div>
                <h3>Random value between {props.min} and {props.max} => </h3>
            </div>
        </div>
    )
}

export default Random;