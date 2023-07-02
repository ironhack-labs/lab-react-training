import React, { useState } from "react";


const LikeButton = () => {
    const [ counter, setCounter] = useState(0)
    const [ backgroundColor, setBackgroundColor ] = useState('red')
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    return(
        <div className="like-button">
            <button
                style={{ backgroundColor: backgroundColor}}
                onClick={() => {
                    setCounter(counter + 1);
                    setBackgroundColor(colors[counter % colors.length])
                }}
            >{counter} likes</button>
        </div>
    )
}

export default LikeButton