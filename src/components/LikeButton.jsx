import { useState } from "react";

const availableColors = ["purple", "blue", "green", "yellow", "orange", "red"];

function LikeButton() {
  const [likesNumber, setLikesNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState(availableColors[0]);

  const handleButtonIncrement = () => {
    let numericLikesNumber = Number(likesNumber);
    setLikesNumber(numericLikesNumber + 1);
    if (numericLikesNumber + 1 < availableColors.length) {
      setButtonColor(availableColors[numericLikesNumber + 1]);
    }
  };
  return (
    <button
      onClick={handleButtonIncrement}
      style={{ backgroundColor: buttonColor, color: "white" }}
    >
      {likesNumber} Like{likesNumber != 1 && "s"}
    </button>
  );
}

export default LikeButton;