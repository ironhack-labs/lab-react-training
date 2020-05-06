import React from 'react'

const Greetings = (props) => {
  return (
    <div className="Greetings">
      <p>
        {props.lang}, {props.children}
      </p>
    </div>
  )
}

export default Greetings
