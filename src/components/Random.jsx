import React from 'react'

const Random = (props) => {
    function getRandom (min, max){
        return Number(Math.floor(Math.random() * (max - min) + min))
    }
    const min = props.min;
    const max = props.max;
    console.log(getRandom());
    return (
        <div>            
            <p>Random value between {min} and {max} = {getRandom(min, max)}
            </p>
        </div>
    )
}

export default Random
