import { useState } from 'react';

function LikeButton () {
    const[nrOfLikes, setNrOfLikes] = useState(0);

    function increaseLikes () {
        setNrOfLikes((prevNrOfLikes) => prevNrOfLikes+1)
    }

    return (
        <div>
            <h3>Iteration 8</h3>
            <button onClick={()=>increaseLikes()}>{nrOfLikes} likes</button>
        </div>
    )
}
export default LikeButton