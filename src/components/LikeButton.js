import { useState } from "react";
import './LikeButton.css';

function LikeCounter() {
    const [LikeCount, setLikeCount] = useState(0)
    return (
        <div className='LikeButton'>
            <button onClick={() => setLikeCount((iniLikeCount) => iniLikeCount + 1)} >like {LikeCount}</button>
        </div>
    )
}
export default LikeCounter