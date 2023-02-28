import React from 'react'

function Random(props) {
    const {min, max}= props;
    const random = Math.floor(Math.random() * (max - min) + min)
    /*= function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    } */
  return (
    <div>
        <h3 class="random">Random value between {min} and {max} => {random} </h3>

    </div>
  )
}

export default Random