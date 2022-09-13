import React, { useState } from 'react'

const initialIndex = 0

function Carousel({images}) {
const [index, setIndex] = useState(initialIndex)



const handleClickAfter = () => {
  if (index >= images.length - 1){
    setIndex(initialIndex)
  } else {
    setIndex((prevCount) => prevCount + 1)
  }
}

const handleClickBefore = () => {
  if (index <= 0){
    setIndex(images.length - 1)
  } else {
    setIndex((prevCount) => prevCount - 1)
  }
}

  return (
    <>
      <img className='w-25 mb-3' src={images[index]} alt="Carousel" />
      <br/>
      <button className='btn btn-primary mx-2' onClick={handleClickBefore}> Before</button>
      <button className='btn btn-primary mx-2'  onClick={handleClickAfter}> After</button>
    </>

  )
}

export default Carousel