import React from 'react'

const Random = (props) => {
    let randomNumber = Math.floor(Math.random() * props.max) + props.min
   
    return (
      <div className="random">
        <div>
          <p>Random value between {props.min} and {props.max} => {randomNumber}</p>  
        </div>
      </div>
    )
  }
  
  export default Random