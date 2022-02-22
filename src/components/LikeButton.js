import { useState } from 'react'

function LikeButton () {

    const [like, setLike] = useState(0)

    return (
    <button onClick={() => setLike((prevCountLike) => prevCountLike + 1)}> {like} Likes</button>
    )
}

export default LikeButton