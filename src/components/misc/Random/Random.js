import React from 'react';

const Random = (props) => {
    return (
        <div>
            <h2>Random value between {props.min} and {props.max}:  {(Math.floor(Math.random() * (props.max - props.min + 1)) + props.min).toString()}</h2>
        </div>
    );
};

export default Random;