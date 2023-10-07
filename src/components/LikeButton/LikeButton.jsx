import { useState } from "react";
import getTextColorForBg from "../getTextColorForBg";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const rgbColor = [
    "rgb(128, 0, 128)",
    "rgb(0, 0, 255)",
    "rgb(0, 128, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 165, 0)",
    "rgb(255, 0, 0)",
  ];
  return (
    <>
      <button
        style={{
          backgroundColor: colorArray[like % colorArray.length],
          color: getTextColorForBg(rgbColor[like % colorArray.length]),
          marginRight: "1rem",
        }}
        onClick={() => setLike(1 + like)}
      >
        {like} Like
      </button>
    </>
  );
};

export default LikeButton;
