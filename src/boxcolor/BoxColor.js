import React from 'react';

const BoxColor = (props) => {
  
  return (
    <section className="color-box" style={{background:`rgb(${props.r},${props.g},${props.b})`}}>
      <p>R: {props.r} G: {props.g} B: {props.b}</p>
    </section>
  )
}

export default BoxColor;