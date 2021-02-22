import React from 'react'

export default function LikeButton(props) {
    let counter = 0;
    
    return (
        <div>
            <button style={{width:"100px", backgroundColor:"green", border:"solid 10px lightblue", borderRadius:"15px", color:"white", fontSize:"20px"}}>{counter} Likes</button>
        </div>
    )
}
