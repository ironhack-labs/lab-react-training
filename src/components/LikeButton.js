import React, { useState } from "react";

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
 
function LikeButton() {
  const [like, setLike] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div className="likeButton">
 
 <button
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={() => {
          setLike(like+ 1);
          if (colorIndex === colors.length - 1) {
            setColorIndex(0);
          } else {
            setColorIndex(colorIndex + 1);
          }
        }}
      >
        {like} Likes
      </button>
      
    </div>
  );
}
 
export default LikeButton;