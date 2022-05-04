import { useState } from 'react'


function LikeButton() {

    const [linkValue, setLikeValue] = useState(0)

    return (
        <div className="Like">
            <p> {linkValue} </p>
            <button onClick={() => setLikeValue(prevLikeVal => prevLikeVal + 1)}> Like</button>
        </div>
    );
}

export default LikeButton;