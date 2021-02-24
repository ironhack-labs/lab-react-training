import React, { useState } from 'react'

export default function Carousel(props) {
  let [index, setIndex] = useState (0)
  let [image, setImage] = useState (props.imgs[index])
  

  function movesLeft () {
    
    setIndex(index-1)
    if (index <=0) {
        setIndex (props.imgs.length-1)
        return setImage (props.imgs[index])
    }
    console.log(index)
     return setImage (props.imgs[index])
  }

  function movesRight () {
    setIndex(index+1)
    console.log(index)
    if (index>props.imgs.length-2) {
        setIndex (0)
        console.log(index)
    }
     return setImage (props.imgs[index])
    
    
  }
  return (
    <div>
      <img src={image}/>
      <button onClick={() => movesLeft()}>Left</button>
      <button onClick={() => movesRight()}>Right</button>
    </div>
  )
}
