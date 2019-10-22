import React from 'react';

const Random = (props) => {

    // console.log(props.max)

    const { min, max } = props

    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    return (
        <div>
            <p>Random Value between {props.min} and {props.max}: {randomNumber}</p>
        </div>
    );
}

export default Random