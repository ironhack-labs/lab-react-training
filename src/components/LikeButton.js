import { useState } from "react";

function LikeButton() {
    const [count, setCount] = useState(0);
    
    const colorsArray = ['purple','blue','green','yellow','orange','red']
    const buttonCounter = () => { return setCount(count+1)}

    return <div>
        <button 
            onClick={buttonCounter} 
            style={{padding: "10px", margin: "10px", color: "white", backgroundColor: colorsArray[count % 6]
            }} 
            >
            {count} Likes
        </button>
    </div>
}

export default LikeButton;