import React from 'react'

export default function Random(props) {

    function getRandomNumber(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max -min +1) +min);
    }


    return (
        <div>
            <p className="randomNumbers">
                Random value between {props.min} and {props.max} = {getRandomNumber(props.min, props.max)}
            </p>
        </div>
    )
}
