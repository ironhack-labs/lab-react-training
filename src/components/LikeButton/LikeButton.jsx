import { useState } from "react";


function LikeButton(){
const [like, setLike ] = useState(0)
const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

const handleSetLikes= () => {
    
        setLike(like + 1)

}

    return(
        <div className="button">
            <button onClick={handleSetLikes} style={{backgroundColor:`${colors[Math.floor(Math.random() * (colors.length - 1) + 1)]}`}}>{like}Likes
            </button>


        </div>
    )
}

export default LikeButton