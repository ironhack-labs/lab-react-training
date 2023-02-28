import { useState } from "react"
const colorArr=['purple','blue','green','yellow','orange','red']

function LikeButton() {
    const [numLikes, setNumLikes]= useState(0)
    const increaseLikes = ()=>{
        setNumLikes(numLikes+1)
    }

    const colorAleatorio() {
        const randomNumber= Math.floor()*colorArr.length
        const randomPosition= Math.floor(randomNumber)
        const randomColor= colorArr[randomPosition]

        const styleRandom= {
            backgroundColor: randomColor
        }

    }
  return (
    <div>
    <button onClick={increaseLikes} style={colorAleatorio} >{numLikes} Likes</button>
    </div>
  )
}

export default LikeButton