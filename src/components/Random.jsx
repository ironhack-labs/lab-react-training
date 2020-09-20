import React from 'react';

const Random = (props) => {
    const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    return (<article>
        <p>Random value between {props.min} and {props.max} => {randomNumber}</p>
    </article>
    )
}

export default Random 