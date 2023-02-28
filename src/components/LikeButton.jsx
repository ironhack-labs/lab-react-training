import React from 'react'

function LikeButton(props) {
    const {colors, likesFunction, likes} = props;
    
    
  return (
    <div>
        <button className="like-button" style={{backgroundColor : colors}} onClick = {() => likesFunction()}>{likes} Likes</button>
    </div>
  )
}

export default LikeButton