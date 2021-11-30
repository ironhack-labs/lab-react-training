import React, { useState } from 'react'

export default function LikeButton() {
    
const [liked, setLiked] = useState(0)
const [color, setColor] = useState(0)
const colors = ['purple','blue','green','yellow','orange','red']
const randomColor = colors[Math.floor(Math.random()*colors.length)];

//console.log(randomColor)

const likeHandler = () => {
setLiked(liked => liked + 1 )
setColor(color => randomColor)
}

//const buttonColor = colors[color]
return (
<div>
<button style={{backgroundColor: randomColor}} onClick={likeHandler}> {liked} Likes</button>
</div>
);
    
}
