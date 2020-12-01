import React from 'react'

const Random = (props) => {
    
   const randomNum =  Math.floor(Math.random() * (props.max - props.min) + props.min);


    return (
        <div>
              <h2>Random value between {props.min} and {props.max}: {randomNum}</h2>
        </div>
    )
}

export default Random
