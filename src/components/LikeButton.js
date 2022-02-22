import { useState } from "react"

const LikeButton = () => {

    const [likeValue, setLikeValue] = useState(0)

    return (
        <>
            <button onClick={() => setLikeValue((prevLikeValue) => prevLikeValue + 1)}>
                {likeValue} Likes
            </button>
        </>
    )
}
export default LikeButton