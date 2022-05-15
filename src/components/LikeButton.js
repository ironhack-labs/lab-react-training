import { useState } from "react";

export default function LikeButton() {
    const [numberLikes, setNumberLikes] = useState(0);
    const [index, setIndex] = useState(0)
    const colors = ['purple','blue','green','yellow','orange','red'];

    const handleClick =()=> {        
        if (index < (colors.length - 1)) {
            setIndex (index + 1)
        } else {
            setIndex(0)
        }
        return (
            setNumberLikes(numberLikes + 1)
        )
    }

    return (
        <div className="box">
            <button className="button-like" onClick={()=>{handleClick()}} style={{backgroundColor: colors[index]}}>{numberLikes} Likes</button>
        </div>
    )
}