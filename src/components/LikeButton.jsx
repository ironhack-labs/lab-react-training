import { useState } from 'react';

const LikeButton = (props) => {
    const arr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [likes, setLikes] = useState(0);
    const [posArr, setPos] = useState(0);

    const likeStyle = { backgroundColor: arr[posArr] };
   
    const updateLike = (signo) => {
        const newLike = likes + signo;
        const newPos = posArr + signo;
        if (newLike >= 0) {
            setLikes(newLike);
            setPos(newPos);
        }
        if (posArr === arr.length - 1) {
            setPos(0);
        }
    };

   
    return (
      <div>
        <button onClick={() => updateLike(1)} style={likeStyle}>{likes} likes</button>;
      </div>
    );
            
}

export default LikeButton;