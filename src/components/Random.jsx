import React from 'react'

function Random(props){
    const {min, max} = props;
    function randomNumberInRange (min,max){
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
    return(
    <div>
        <p>Random value between {min} and {max} => {randomNumberInRange(min,max)}</p>
    </div>
    )
};

export default Random

