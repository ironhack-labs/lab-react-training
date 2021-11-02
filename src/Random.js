import React from 'react';

function Random (props) {
    const {min, max} = props
    const RandomNumber = Math.floor(Math.random()*(max-min) +min)
    return (
        <>
        Random value between {min} and {max} ={">"} {RandomNumber}
        </>
    )
}



export default Random;