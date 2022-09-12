import React, { useState } from 'react'

const initialState = 1

function Carousel({images}) {
const [count, setCount] = useState(initialState)
const [image, setImage] = useState(images[count])


const handleClickAfter = () => {
  if (count >= images.length - 1){
    setCount(-1)
    setImage(images[count])
  }
  console.log(image, count, images.length)
  setCount((prevCount) => prevCount + 1)
  setImage(images[count])
}

const handleClickBefore = () => {
  if (count <= 0){
    setCount(images.length)
    setImage(images[count])
  }
  console.log(image, count, images.length)
  setCount((prevCount) => prevCount - 1)
  setImage(images[count])
}



  return (
    <>
      <img className='w-25' src={image} alt="Carousel" />
      <br/>
      <button className='btn btn-primary mx-2' onClick={handleClickBefore}> Before</button>
      <button className='btn btn-primary mx-2'  onClick={handleClickAfter}> After</button>
    </>

  )
}

export default Carousel