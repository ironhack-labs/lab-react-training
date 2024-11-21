import React, { useState } from "react";

function LikeBox() {
  const [count1, setCount1] = useState(0);
  const [backgroundColor1, setBackgroundColor1] = useState(0);

  const [count2, setCount2] = useState(0);
  const [backgroundColor2, setBackgroundColor2] = useState(0);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick1 = () => {
    setCount1(count1 + 1);
    const nextColorIndex = backgroundColor1 + 1;
    setBackgroundColor1(nextColorIndex < colors.length ? nextColorIndex : 0);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
    const nextColorIndex = backgroundColor2 + 1;
    setBackgroundColor2(nextColorIndex < colors.length ? nextColorIndex : 0);
  };

  return (
    <div className="like-box">
      <button
        onClick={handleClick1}
        style={{ backgroundColor: colors[backgroundColor1], margin:"20px",     padding: "10px 20px" }}
      >
        {count1} Likes
      </button>

      <button
        onClick={handleClick2}
        style={{ backgroundColor: colors[backgroundColor2], margin:"20px",     padding: "10px 20px" }}
      >
        {count2} Likes
      </button>
    </div>
  );
}

export default LikeBox;
