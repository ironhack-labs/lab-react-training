import React, {useState} from 'react';

const LikeButton = () => {
    const [count, setCount] = useState(0)
    let colors = ['purple','blue','green','yellow','orange','red']
    let index;
    count > 5? index=(count-6) : index=count
    let buttonStyle = {
        backgroundColor: colors[index]
    }
    return (
        <button onClick={() => setCount(count+1)} style={buttonStyle}>{count} {
            count > 1 ? "Likes": "Like"
        }</button>
    )
}

export default LikeButton