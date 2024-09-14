import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [colorCount, setColorCount] = useState(0);
  const [color, setColor] = useState(`purple`);

  const addLike = () => {
    const colors = [`purple`, `blue`, `green`, `yellow`, `orange`, `red`];
    setCount(count + 1);
    setColorCount(colorCount + 1);
    if (colorCount > 5) setColorCount(0);
    setColor(colors[(colorCount + 1) % colors.length]);
  };

  return (
    <div className="flex justify-center items-center ">
      <button
        style={{ background: color }}
        onClick={() => addLike()}
        width={100}
      >
        {count} Likes
      </button>
    </div>
  );
}
