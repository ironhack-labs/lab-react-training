import React from 'react'

export default function IdCard(props) {
  return (
      <>
        <p>Random value between 1 and 6 = {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</p>
      </>
  )
}