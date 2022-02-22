import { useState } from 'react'
import './LikeButton.css'


const LikeButton = () => {  
    let [likes, setLikes] = useState(0)

    const changeLikes = () => setLikes(likes + 1)
    return(
        <article className="likeBtn">
            <button onClick={changeLikes}>{likes} likes</button>
      
        </article>

    )
    
}

export default LikeButton
