import React, { useState } from 'react';

export default function LikeButton() {
    const [count, setCount] = useState(0);
    const [index, setColor] = useState(0);
    const colorsArray = ['purple','blue','green','yellow','orange','red']
    const likeHandler = () => {
        setCount(count => count +1)
        //SetCount(count +1) would also work, but in some case could provoce some bugs
        setColor(index => index < 5 ? index +1 : index = 0)
    }
    const buttonColor = colorsArray[index]

    return (
        <div>
            <button style={{backgroundColor: buttonColor}} onClick={likeHandler}>{count} Likes</button> 
        </div>
    )
}
