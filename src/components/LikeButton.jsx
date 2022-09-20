import { useState } from 'react';

const LikeButton = (props) => {
    const [likes, setLikes] = useState(0);

    const updateLike = (number) => {
        const newLike = likes + number;
        if (newLike >= 0) setLikes(newLike);

    };

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'black'];

    const randomNumb = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <button
            className='likeButton'
            style={{ backgroundColor: colors[randomNumb(0, 6)], color: 'white' }}
            onClick={() => updateLike(1)}> Likes {likes}</button>
    )
}

export default LikeButton