import { useState } from "react"

function LikeButton() {
    const [like, setLike] = useState(0);
    function incrementLike() {
        setLike(like + 1)
    }
    
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const random = Math.floor(Math.random() * colors.length)
    const select = colors[random]
    return <button onClick={incrementLike} style={{ backgroundColor: select }}>{like} Likes</button>

}
export default LikeButton;