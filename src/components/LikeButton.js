import React from 'react'
import { useState } from 'react'

function LikeButton( ) {
   const [counter, setCounter] = useState(0);
   const [backgroundColor, setBackgroundColor] = useState(0)

   const colors = ['purple','blue','green','yellow','orange','red']

   function changeBackground() {
    setBackgroundColor(backgroundColor === colors.length -1 ? 0 : backgroundColor + 1)
    }

   function count() {
    setCounter(counter + 1)
   }

   const buttonColor = { backgroundColor: colors[backgroundColor]}

   return (
        <div>
        <button className='counter' style={buttonColor} onClick={() => {count(); changeBackground()}}>{counter} likes</button>
        </div>
    )
}

export default LikeButton
