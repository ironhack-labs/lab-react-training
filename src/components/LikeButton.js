import React from 'react'
import { useState } from 'react'

export default function LikeButton() {

    let [likesCount, setLikes] = useState(0)
    let [btnColor, setBtnColor] = useState('green')

    const likeHandler = () => {

        setLikes(likesCount => likesCount + 1)

        const colorArr = ['purple','blue','green','yellow','orange','red']
        let randIndex = Math.floor(Math.random() * colorArr.length)

        setBtnColor(colorArr[randIndex])
    }

    return (
        <>
            <div>LikeButton</div>

            <button style={{backgroundColor: btnColor}} onClick={likeHandler}>{likesCount} Likes</button>
        </>
    )
}
