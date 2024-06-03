import { useState } from "react";
import "./LikeButton.css";
const LikeButton = () => {
  const [counter, setCounter] = useState(0);
  const [bgcolor, setbgcolor] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const handleButton = () => {
    setCounter(counter + 1);
    setbgcolor((bgcolor + 1) % colors.length);
  };
  return (
    <div className="like-button mb-5">
      <button className="btn btn-primary btn-lg" onClick={handleButton} style={{backgroundColor: colors[bgcolor]}}>
        likes {counter}
      </button>
    </div>
  );
};

export default LikeButton;
