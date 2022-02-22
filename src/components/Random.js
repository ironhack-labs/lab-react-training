import React from 'react'

function Random({ min, max }) {
    let random = Math.random() * (max - min) + min;

    return (
        <>
            <p>{random}</p>


        </>
    )
}

export default Random