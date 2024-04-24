import React, {useState} from 'react';

function LikeButton() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [counter, setCounter] = useState(0)
    const [colorIndex, setColorIndex] = useState(0);


    const raiseCountAndColor = () => {
        setCounter(counter + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    
      };   
    return (
        <div className='LikeButton'>
            <button style={{ backgroundColor: colors[colorIndex] }} onClick={raiseCountAndColor}>{counter} Likes</button>
        </div>
    )
}

export default LikeButton