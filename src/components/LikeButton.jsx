// import React from "react";
// import { useState } from "react";

// function LikeButton() {
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("");

//   let colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];

//   const likeClickhandler = () => {
//    //  setCount(count + 1);
//    setCount((prevCount) => prevCount + 1);
//     let randomIndex = Math.floor(Math.random() * colorArray.length);
//     setColor(colorArray[randomIndex]);
//     console.log("Color", color);
//   };

//   return (
//     <div className="button-container">
//       <button
//         className="like-btn"
//         style={{
//           background: color,
//           padding: "50px",
//           color: "white",
//           fontSize: "40px",
//         }}
//         onClick={likeClickhandler}
//       >
//         Like {count}
//       </button>
//     </div>
//   );
// }

// export default LikeButton;
import React from 'react';

function LikeButton(props) {
  const { countIncrease, count, color } = props;
  return (
    <div className="center">
      <button
        style={{
          background: color,
          padding: '50px',
          color: 'white',
          fontSize: '40px',
        }}
        onClick={countIncrease}
      >
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;