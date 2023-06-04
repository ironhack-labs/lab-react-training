import "./Random.css"
import React, { useState } from "react"
function Random(props) {
  const [random, setrandom] = useState(0)
  const minimo = props.min
  const maximo = props.max
  return (
    <div className="border">
        <p className="style-font">Random value between {props.min} and {props.max} ➡️ <span className="bold">{Math.floor(Math.random() * (maximo - minimo + 1)) + minimo}</span> </p>
      <button className="button" onClick={() => setrandom(random + 1)}>Generate Random Number</button>
    </div>
  )
}

export default Random