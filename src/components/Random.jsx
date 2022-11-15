import React from 'react'

function Random(props) {
    const { min, max } = props;
    return (
        <p>Random value between {min} and {max}: {Math.floor(Math.random() * (max - min + 1) + min)} </p>
    )
}

export default Random