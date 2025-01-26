import "./LikeButton.css";
import React, { useState } from "react";
function LikeButton() {
  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"]
  
  const [num, setNum] = useState(0);


  const addLike = () => {
  
    setNum(num + 1);
  };

  return (
    <button onClick={addLike} className="button" style={{backgroundColor: `${colorsArray[num % colorsArray.length]}`}} >
      {num} Likes
    </button>
  );
}

export default LikeButton;
