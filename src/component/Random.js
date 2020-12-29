import React from 'react'


function Random(props) {
        function randomValue(min, max){
                return Math.floor(Math.random()*(max-min+1) + min)
        }
        return (
                <div className="border">
                        <p>Random value between {props.min} and {props.max} => {randomValue(props.min, props.max)}</p>
                </div>
        )
}

export default Random
