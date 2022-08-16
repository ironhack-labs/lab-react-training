import React from 'react'

function Random(props) {
    const {min, max} = props
  return (
    <div class="helloMessage">
        <p>Random value between {min} and {max} -- <b>{Math.floor(Math.random() * (max - min) + min)}</b></p>
    </div>
  )
}

export default Random