import React from 'react';

function Greetings(props) {
    return (
        <div>
            {props.de} Ludwig
            <br />
            {props.fr} François
        </div>
    )
}

export default Greetings;