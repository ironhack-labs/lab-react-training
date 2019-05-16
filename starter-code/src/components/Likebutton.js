import React, { useState } from "react";
import BoxColor from "./BoxColor";
import { randNumber } from "../helpers/functions";

const LikeButton = () => {
  const [likes, setLike] = useState(0);
  return (
    <div className="like-btn" onClick={() => setLike(likes + 1)}>
      <BoxColor
        r={randNumber(0, 255)}
        g={randNumber(0, 255)}
        b={randNumber(0, 255)}
      >
        {likes} Likes
      </BoxColor>
    </div>
  );
};

export default LikeButton;
