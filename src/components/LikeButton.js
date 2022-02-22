import { useState } from "react";

function LikeButton(){

    const[counter,setCounter]= useState(0)

    return(
        <div className = 'like'>
            <button onClick={() => setCounter((prevCountValue) => prevCountValue + 1)}>likes {counter} </button>
        </div>
    )
}

export default LikeButton