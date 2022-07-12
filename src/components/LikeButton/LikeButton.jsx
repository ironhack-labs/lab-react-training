import "./LikeButton.css"
import { useState } from "react";



const LikeButton = () => {
    const arrOfColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const [likesValue, setlikesValue] = useState(0)
    const incrementValue = () => setlikesValue(likesValue + 1)
    return (
        <button onClick={incrementValue} className='likeBtn'>{likesValue} Likes</button>
    )
}

export default LikeButton;