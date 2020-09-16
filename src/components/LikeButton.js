import React, {useState} from 'react'

function LikeButton() {

    const [getLike,setLike]=useState(0)

    return (
        <div className="LikeButton">
         <button onClick={() => setLike(getLike + 1)}>
         <p>{getLike}likes</p>
         </button>
        </div>
    )
}


export default LikeButton

