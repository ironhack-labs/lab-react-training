import { useState } from "react"

function LikeButton() {

    let [likeCount, setLikeCount] = useState(0)

    const colors = ['purple','blue','green','yellow','orange','red']
    const colorRandom = colors.map(color => color)
    const styles = {background: `${colorRandom}`}
    // let colorRandom = Math.floor(Math.random() * colors.length)

    return (
        <button style={styles} onClick={() => setLikeCount((prevCountValue) => prevCountValue + 1)}>
            <p>{likeCount} Likes</p>
        </button>
    )
}

export default LikeButton