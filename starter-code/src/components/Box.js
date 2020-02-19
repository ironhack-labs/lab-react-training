import React from 'react';

const Box = props => {
    return (
        <div className = "greetings">
            <div>
                <h3>{props.r}{props.g}{props.b}  </h3>
            </div>
        </div>
    )
}

export default Box;