import './LikeButtonStyle.css';
import { useState, useEffect } from 'react';

function LikeButton() {
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState('')
    let color = {backgroundColor: colors}
    const colorsArr = ['purple','blue','green','yellow','orange','red']

    useEffect(() => {
        setColors(colorsArr[count % 6])
    }, [count])

    return (
        <button className='LikeButton' style={color} onClick={() => setCount(count + 1)}>
            {count} Likes
        </button>
    );
}

export default LikeButton;