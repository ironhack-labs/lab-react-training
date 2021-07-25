import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0)

    return(
        <section className = 'like-section'>
            <button onClick = {() => {setLikes(likes + 1)}}>{likes} likes</button>            
        </section>
    );
}


export default LikeButton