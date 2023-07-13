import React, { useState } from 'react'

export default function LikeButton() {

    const colors=  ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [likes, setLikes]= useState(0); // this useState xounts # of likes
    const [colorIndex, setColorIndex]= useState(0); // this useState determines color

    const handleClick= () => {
        setLikes(likes +1);
        setColorIndex((colorIndex + 1) % colors.length);
    }

  return (
 <button id="likeButton" style= {{backgroundColor: colors[colorIndex]}} onClick={handleClick}>
    {likes} likes
 </button>

  )
}
