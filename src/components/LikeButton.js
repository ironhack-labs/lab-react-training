import { useState } from "react";

export function LikeButton(){
const [likes, setLikes] = useState(0);
const bgColors = ['purple','blue','green','yellow','orange','red'];
const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
const updateLike = () => {
    setLikes(likes + 1)
}
    return(
    <div className="text-start">
     <button onClick={updateLike} className="btn text-white" style={{backgroundColor: `${randomColor}`}}>{likes} Likes</button>
     </div>
    );
}