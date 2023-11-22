import { useState } from 'react'

const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const increaseLikes = () => {
        const newIndex = (colorIndex + 1)
        setColorIndex(newIndex)
        setLikes(likes + 1)
    }

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        color: 'white',

    }

    return (
        <div>
            <button style={buttonStyle} onClick={increaseLikes}>
                {likes} {likes === 1 ? 'Like' : 'Likes'}
            </button>
        </div>
    )
}

export default LikeButton