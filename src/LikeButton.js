import React from 'react';
import {useState} from 'react'




const LikeButton = (props) => {
  const [color, setColor]= useState('red')
  const colors= ['purple','blue','green','yellow','orange','red']
 let randomColor=()=> {
     const randy= Math.floor(Math.random() * (6 - 1)+1) ;
     color= colors[randy]
     setColor(color)
     console.log(color)
  }

  const [count, setCount] = useState(0)
  function add() {
      setCount(count+1)
    }

  return (
    <div >
     <button  style={{ backgroundColor: {randomColor}}} onClick={add}  >{count} likes </button>
    {/* <LikeButton color={randomColor}/> */}
    </div>
  )
}

export default LikeButton
