import React from 'react'

export default function Random(props) {

  const setRandom =() => {
    return Math.floor(Math.random() * props.max)
  }
  console.log(Math.floor(Math.random() * (props.max - props.min) + props.min));
  

  return (
    <div class='border border-dark m-4 p-2'>
      <p>Random value between {props.min} and  {props.max} {'=>'} {setRandom()}</p>
    </div>
  )
}
