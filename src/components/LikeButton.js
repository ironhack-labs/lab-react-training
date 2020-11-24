import '../style/LikeButton.css'
import React, {useState} from 'react';

function LikeButton() {
    const [count, setCount] = useState(0)

    return(
        <div>
        <button onClick={() => setCount(count + 1)}>{count} Likes</button>
        </div>
    )
}

export default LikeButton;