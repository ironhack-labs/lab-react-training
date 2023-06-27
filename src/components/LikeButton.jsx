import { useState } from "react";

function LikeButton () {

    let colors = ['purple','blue','green','yellow','orange','red']
    const divStyle = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        color: 'white',
    }
  
    const [counter, setCounter] = useState(0)

    const AddLikeToCounter = () => {
        const addLike = counter + 1
        setCounter(addLike);
    }

    return (
        <div  className="LikeButton">
            <button  style={divStyle} onClick={AddLikeToCounter}>{counter} Likes</button>
        </div>
    )
}
export default LikeButton;