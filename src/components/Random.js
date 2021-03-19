import React from "react";
import "../statics/css/Random.css"

const Random = ({min , max}) => {

    const getRandom = (min,max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const text = `Random value between ${min} and ${max} => ${getRandom(min,max)}`
    return (
        <div className="Random">
        <p>{text}</p>
        </div>
    )
}

export default Random ;
