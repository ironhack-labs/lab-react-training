import React from 'react'

const Random = (props) => {

let randomNumber = Math.floor(Math.random() * props.max)

    return  (   
            <p>Random value between {props.min} and {props.max} = {randomNumber}</p>
    )

}

export default Random;