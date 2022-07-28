import { useState } from "react";

const LikeButton = () => {
  const [num, SetNum] = useState(0)

  return ( 
    <div className="likeButtons" >
      <button onClick={() => SetNum(num + 1)} > {num} Likes </button>
    </div>
  );
}

export default LikeButton;