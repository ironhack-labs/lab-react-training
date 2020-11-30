import React, {useState} from 'react'

export default function Dice(){
  let startImage = `/img/dice${randomNum()}.png`
  const [image, setImage] = useState(startImage)

  function randomNum(){
    return Math.floor(Math.random()*(6-1)+1)
  }

  function randomImage(){
    setImage('img/dice-empty.png')
    const a = setTimeout(() => {
      setImage(`/img/dice${randomNum()}.png`)
    }, 1000)
  }

  return (
    <div>
      <img style={{height: '150px'}} src={image} alt="" onClick={randomImage}/>
    </div>
  )
}