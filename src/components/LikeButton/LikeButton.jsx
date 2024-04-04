import { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const incrementLikes = () => {
        setLikes(likes + 1)
        setColorIndex((colorIndex + 1) % colors.length)
    }

  return (
    <div>

    <button style={{ backgroundColor: colors[colorIndex] }} onClick={incrementLikes}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton