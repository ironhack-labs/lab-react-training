import React from "react";
import { useState } from "react";

function LikeButton(){
    const [count, setCount] = useState(0);
    const colors=['purple','blue','green','yellow','orange','red']

    return(<div className="LikeButton">
   
        <button onClick={()=> setCount(count+1)}>{count} Likes </button>
    </div>)

}

export default LikeButton;