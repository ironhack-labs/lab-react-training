import React from 'react'

 function Random(props) {
    function randomNumber(min, max){
        return Math.ceil(Math.random() * (max - min + 1) + min)
    }

  return (
    <div>
        random value between {props.min} and {props.max} → {randomNumber(props.min, props.max)}

    </div>
  )
}

export default Random;