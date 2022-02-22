import React from "react"

const LikeButton = props => {

    const [likeCount, setLikeCount] = React.useState(0)
    
    return (
        <div>
            <button onClick={()=>setLikeCount(likeCount + 1)}>{likeCount} Likes</button>
        </div>
    )
}

export default LikeButton