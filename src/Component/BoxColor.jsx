import React from 'react'

const BoxColor = (props) => {
    const style = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`

    }
  return (
    <div style={style}>rgb({props.r}, {props.g}, {props.b})</div>
  )
}

export default BoxColor