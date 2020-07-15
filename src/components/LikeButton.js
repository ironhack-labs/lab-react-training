import React, { useState } from 'react';

const LikeButton = () => {
  const [allValues, setAllValues] = useState({
    likes: 0,
    background: 'purple',
  });

  const changeHandler = () => {
    const backgrounds = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    let newLikes = allValues.likes;
    newLikes = newLikes + 1;
    let randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setAllValues({
      likes: newLikes,
      background: randomBackground,
    });
  };

  return (
    <button
      style={{ background: allValues.background }}
      onClick={changeHandler}
    >
      {allValues.likes} Likes
    </button>
  );
};

export default LikeButton;
