import React from 'react'
import {useState} from 'react'

import './likeButton.css'

export default function LikeButton() {
    const colorsArray = ['purple','blue','green','yellow','orange','red']
    const [ counter, setCounter ] = useState(0)

    return (
    <div className="Button" style={{backgroundColor:colorsArray[counter%6]}} onClick={()=>{setCounter(counter+1)}}>{counter} Likes</div>
  )
}
