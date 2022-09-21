import './LikeButton.css'
import { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [counter, setCounter] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const updateCounter = () => {
        // const newCount = newLike % colors.length;
        let newCount = counter;
        if (counter < 5) {
            newCount += 1;
        } else {
            newCount = 0;
        }
        setCounter(newCount)
    }

    const updateLike = () => {
        console.log('estas viendo el contador', counter)
        const newLike = likes + 1
        setLikes(newLike);
    };
    return (
        <button className={colors[counter]} onClick={() => {
            updateLike(); updateCounter();
        }}>{likes} Like</button>
    )
}


export default LikeButton
