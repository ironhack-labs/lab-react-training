import React from 'react';

const Random = (props) => {

    return (
        <b className="profile">
             Random value between {props.min} and {props.max} => {' '}
        {Math.round(Math.random() * (props.max - props.min) + props.min)}
        </b>
    );

}

export default Random;