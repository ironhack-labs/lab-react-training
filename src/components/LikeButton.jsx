import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  const colores = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [color, setColor] = useState(colores.indexOf("white"));

  const like = () => {
    setCount(count + 1);

    setColor((prevColor) => (prevColor + 1) % colores.length);
  };
  return (
    <div>
      <button
        className="like-button"
        onClick={like}
        style={{ backgroundColor: colores[color] }}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
