import { useState } from "react"
import './LikeButton.css'


function LikeButton() {

    const [counts, setCounts] = useState(0)

    function incrementLike() {
        setCounts(counts + 1)
    }



    return (
        <button onClick={incrementLike}>{counts} Likes</button>
    )
}




export default LikeButton