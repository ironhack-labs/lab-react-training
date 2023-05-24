import React, {useState} from "react"
import './LikeButton.css'

function LikeButton () {
    let[count, setCount] = useState(0)
    let[backValue, setBackValue] = useState(0)
    let colorsArr = ['purple','blue','green','yellow','orange','red']

    function handleClick() {
        setCount(count+1)
        if(backValue > 4) {
            setBackValue(0)
        } else {
            setBackValue(backValue+1)
        }

    }

    return(
        <button onClick={()=>handleClick()} className="likeButton__button" style={{backgroundColor: colorsArr[backValue]}}>
            {count} likes
            </button>
    )
}
export default LikeButton