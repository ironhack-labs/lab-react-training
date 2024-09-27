import './likes.css'
import { useState } from 'react';

function Likes() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const randomColor = Math.floor(Math.random() * colors.length)
    console.log(randomColor)

    const [likes, setLikes] = useState(0);

    const updateLike = (signo) => {
        const newLike = likes + signo;
        if (newLike >= 0) setLikes(newLike);
    };
    return (
        <div className='button-div'>
            <button style={{ backgroundColor: colors[randomColor] }} onClick={() => updateLike(1)}>Likes  {likes}</button>
        </div>

    )
}

export default Likes