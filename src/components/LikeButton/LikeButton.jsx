import { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);

    const addLike = () => {
        const newLike = likes + 1;
        setLikes(newLike);
    }

    return (
        <>
            <button onClick={addLike}>Add Like {likes}</button>
        </>
    )
}
export default LikeButton;








