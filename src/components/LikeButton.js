import React from 'react'
import {useState} from 'react'

export default function LikeButton() {
  let [color, setColor] = useState ('purple')
  let [likes, setLikes] = useState (0)
  const colorLike = ['blue','green','yellow','orange','red','purple']

  const sumaLikes = () => {
    setLikes (likes+1)
    setColor (colorLike[likes%6]) 
  }
  return (
    <div>
      <button onClick={()=>sumaLikes()} style={{backgroundColor: color}}>{likes}{likes===1 ? 'Like': 'Likes'}</button>
    </div>
  )
}
