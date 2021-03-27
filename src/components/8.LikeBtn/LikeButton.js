import React, { useState } from 'react'
import './Like.scss'

const LikeButton = () => {
    const [numLikes, setNumLikes] = useState(0)
    const [colorLike, setColorLike] = useState('')

    const onLike = () => {
        setNumLikes(numLikes + 1)
        setColorLike(randomColor)
    }

    const randomColor = () => {
        return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }

    return (
        <button className="LikeButton" onClick={onLike} style={{backgroundColor: colorLike}}>
         {numLikes} Like  
        </button>
    )
}

export default LikeButton
