import React from 'react'

function LikeButton() {
    const [likes, setLikes] = React.useState(0);
    const [backgroundColor, setBackgroundColor] = React.useState();

    const backgroundColors = ['purple','blue','green','yellow','orange','red'];

    function addLikes() {
        const numberOfLikes = likes+1;
        setLikes(numberOfLikes);
        const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        setBackgroundColor(randomColor);
  }

    return (
        <button onClick={addLikes} style={{backgroundColor, color:"white"}}>
            {likes} Likes
        </button>)
}

export default LikeButton
