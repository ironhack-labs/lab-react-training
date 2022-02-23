import React, { useState } from 'react'

function LikeButton() {
    const [likeValue, setLikeValue] = useState(0)




    return (
        <>
            <h2>LikeButton</h2>

            <button onClick={() => setLikeValue(likeValue + 1)}>{likeValue} likes</button>


        </>
    )
}

export default LikeButton