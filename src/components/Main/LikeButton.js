// ./components/Main/LikeButton.js

import React from 'react'
import { useState } from 'react'

export default function LikeButton() {

const [likes,setLikes] = useState(0)

const [colors,setColors] = useState(0)

const colorsArray = ['purple','blue','green','yellow','orange','red']

const buttonStyles = {
    backgroundColor: colorsArray[colors]
  };

const increaseLikes = () => {    
    const countLikes = likes + 1
    setLikes(countLikes);
    console.log(likes);

    const indexColor = colors + 1
    indexColor > colorsArray.length ? setColors(0) : setColors(indexColor)
}


  return (
    <div>
        <button style={buttonStyles} onClick={ ()=>{ increaseLikes() }}>{likes} Likes</button>
    </div>
  )
}