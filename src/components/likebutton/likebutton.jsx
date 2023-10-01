import React, { useState } from 'react';

const colorArr = ["red", "yellow", "blue", "purple", ];

function LikeButton() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} style={{backgroundColor: colorArr[count%colorArr.length]}}>
            {count} Likes
            </button>    
        </div>      
      )
}

export default LikeButton;   
