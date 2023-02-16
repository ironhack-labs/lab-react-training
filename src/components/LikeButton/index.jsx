import "./styles.css"
import React, {useState} from "react"



const LikeButton = () => {
    const [count, setLike] = useState(0);
    const [count1, setLike1] = useState(0);
    return (
        <div>
            <button onClick={() => setLike(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {`${count} Likes`}  </button>
            <button onClick={() => setLike1(count1 + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {`${count1} Likes`}  </button>

        </div>
        
    )
}

export default LikeButton