import './LikeButton.css'
import { useState } from 'react'

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

function LikeButton({ children }) {

    const [currentLikes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const pressLike = () => {
        setLikes(currentLikes+1)
        setColorIndex((colorIndex+1)%colors.length)
    }


    

    return (
        <button style={{backgroundColor: colors[colorIndex]}} className="LikeButton" onClick={pressLike}>{currentLikes}likes</button>



    )
}


export default LikeButton