import React from 'react';

const Random = ({min, max}) => {
    let RandomValue = Math.round(Math.random()*(max-min))
    return (
        <p>{`Random value betwwen ${min} and ${max} => ${RandomValue}`}</p>
    )
}

export default Random;