import React from 'react'
import './styles/Random.css'

export const Random = (props) => {

    function randomize (min, max){

        return Math.floor(Math.random()*(max - min + 1) + min)
    }


  return (
    <div className='random'>
        <h1>Random</h1>
        <p>Random value between {props.min} and {props.max} = {randomize(props.min, props.max)}</p>
        
        
    </div>
  )
}
