import React, { useState } from 'react'

const LikeButton = () => {
    const [allValues, setAllValues] = useState({
        likes: 0,
        background: 'purple',
    });

    const clickLike = () => {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        let likesCount = allValues.likes;
        likesCount = likesCount + 1;
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        setAllValues({
          likes: likesCount,
          background: randomColor,
        });
      };
    
      return (
        <button className="likes" style={{ background: allValues.background }} onClick={clickLike}>
          {allValues.likes} Likes
        </button>
      );
};

export default LikeButton
