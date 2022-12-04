import React from 'react'
import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {

    const [likButtonValue, setLikeButtonValue] = useState(0)

    const incrementLikeButton = () => {

        setLikeButtonValue(likButtonValue + 1)
    }


  return (
    <div >
        <button className='LikeButton' onClick={incrementLikeButton}> Likes: {likButtonValue} </button>
    </div>
  )
}

export default LikeButton;