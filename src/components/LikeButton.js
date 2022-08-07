import { useState } from "react";

const LikeButton = () => {
    const [like,setLike] = useState(0);

    return (
        <button className="likeButton" onClick={() => setLike(like + 1)} > {like} Likes </button>
    );
  };
  
  export default LikeButton;