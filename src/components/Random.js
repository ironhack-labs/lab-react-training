import React from 'react';

const Random = ({min, max}) => {
    
    return <div>Random value between {min} and {max} => {' '}
    {Math.floor(Math.random() * (max - min) + min)} {' '} </div>;
}

export default Random ;