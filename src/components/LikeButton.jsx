import { useState } from "react"

const LikeButton = () => {
    const [ likeCounter, setLikeCounter] = useState(0)

    const backgroundColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [ background, setBackground] = useState (backgroundColors[likeCounter])

    let backgroundStyle = { backgroundColor: `${background}`}
    
    const handleClick = () => {
        setLikeCounter(likeCounter + 1)
        setBackground(backgroundColors[(likeCounter + 1) % 6 ])
    }

    return (
    <button
      onClick={handleClick}
      style={backgroundStyle}
    >
      {likeCounter} Likes
    </button>
    )
}

export default LikeButton;