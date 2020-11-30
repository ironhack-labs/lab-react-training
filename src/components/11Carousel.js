import React, {useState} from 'react'
export default function Carousel({
  imgs
}){
  const [count, setCount] = useState(0)

  function leftPhoto(){
    if (count===0){
      setCount(count+imgs.length)
    } else {
      setCount(count-1)
    }
  }

  function rightPhoto(){
    setCount(count+1)
  }

  return (
    <div>
      <img style={{height: '300px'}}src={imgs[(count)%imgs.length]} alt=""/>
      <div>
        <button onClick={leftPhoto}>Left</button>
        <button onClick={rightPhoto}>Right</button>
      </div>
    </div>
  )
}