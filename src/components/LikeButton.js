import React from 'react';
import '../App.css';

function LikeButton() {
  // Setting the state
  const [numberOfLikes, setNumberOfLikes] = React.useState(0);
  const [backgroundColor, setBackgroundColor] = React.useState('yellow');

  // Number of likes
  function updateNumberOfLikes() {
    let newNumberOfLikes = numberOfLikes;
    newNumberOfLikes += 1;
    setNumberOfLikes(newNumberOfLikes);
    console.log('I am updating the number of likes!');
  }

  let likeForm = 'likes';
  numberOfLikes === 1 ? (likeForm = 'like') : (likeForm = 'likes');

  //Color of the background
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  function changeBackgroundColor() {
    // let newColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    // setBackgroundColor(newColor);

    let index = colors.indexOf(backgroundColor);
    index += 1;
    index > 5 ? (index = 0) : (index = index);
    let newColor = colors[index];
    setBackgroundColor(newColor);
    console.log('I am updating the color!', newColor);
  }

  //   const style = {
  //     backgroundColor: backgroundColor,
  //   };

  function handleChange() {
    updateNumberOfLikes();
    changeBackgroundColor();
  }

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor }}
        onClick={handleChange}
      >
        {numberOfLikes} {likeForm}
      </button>
    </div>
  );
}

export default LikeButton;
