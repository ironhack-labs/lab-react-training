import {useState} from "react";

function LikeButton () {
    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState(0);

    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];

   const handleClick = () => {
    setLikes(likes + 1);

    if (color < colorArray.length - 1) {
        setColor(color + 1);
    } else {
        setColor(0);
    }
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: colorArray[color],
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
}

export default LikeButton;