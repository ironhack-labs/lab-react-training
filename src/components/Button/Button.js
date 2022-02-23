import { useState } from 'react'

function LikeButton() {

    const [likesValue, setLikesValue] = useState(0)

    return (
        <>
            <button onClick={() => setLikesValue((preLikesValue) => preLikesValue + 1)}>{likesValue}</button>
        </>
    )

}

export default LikeButton