import React, { useState } from 'react'

const colors = ['purple','blue','green','yellow','orange','red'];

const LikeButton = () => {

  const [counter, setCounter] = useState(0);
  const [likeNumber, setLikeNumber] = useState('0 Likes');  

  const likesHandler = () => {
    
    setCounter(counter + 1);

    counter === 1 ? setLikeNumber(`${counter} Like`) : setLikeNumber(`${counter} Likes`);
  }

  return (
    <div>
      <button style={{background: `${colors[counter]}`}} onClick={likesHandler}>{likeNumber}

      </button>
    </div>
  )
}

export default LikeButton;
