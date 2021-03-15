import React from 'react'




function Random(props) {
    function getRandomNumber(){
        return Math.random() * (props.max - props.min) + props.min
    }

    return (
        <div>
            <p>Random value between {props.min} and {props.max} = {getRandomNumber()}</p>
        </div>
    )
}

export default Random
