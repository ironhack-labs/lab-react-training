import { useState } from "react"
import "./LikeButton.css"
const LikeButton = props => {

    const [numOfLikes, setNumOfLikes] = useState(0)

    return (

        <button onClick={() => setNumOfLikes((numLikes) => numLikes + 1)}> {numOfLikes} Likes</button>
    )
}
export default LikeButton
