import { useState } from "react"

function LikeButton({color}){

        const [count,setCount]= useState(0)
        function handleClick(){
            setCount(count+1);
        }
   
    return(
        
        <button className="likeButton" style={{background:`${color[0]}`}} onClick={handleClick}>
           {count} Likes
            </button>
    )
}

export default LikeButton