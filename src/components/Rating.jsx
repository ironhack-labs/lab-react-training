import React from "react";
import starFilled from "../assets/images/starFilled.jpeg";
import starEmpty from "../assets/images/starEmpty.png";

function Rating(props) {
  let starsArr = [];
  let solidNumber = Math.round(props.children); //넣어지는 값을 솔리드하게 (4.9 ->5 )
  let filledStarImg = 
    <img className="stars" src={starFilled} alt="filledStars" />;
  let emptyStarImg = <img className="stars" src={starEmpty} alt="emptyStars" />;

  for (let i = 0; i < 5; i++) {
    if (solidNumber > 0) {
      starsArr.push(filledStarImg);
      solidNumber--;
    } else {
      starsArr.push(emptyStarImg);
    }
  }

  return (
    <div>
        <h3>    Rating</h3>
      <div className="star-rating">
        {starsArr.map((e, i) => 
            <section key={i}>{e}</section>
        )}
      </div>
  
    </div>
  );
}

export default Rating;

// import React from 'react';
// import starFilled from '../assets/images/startFilled.jpeg';
// import starEmpty from '../assets/images/starEmpty.png';

// function Rating(props) {
//   let starsArr = [];
//   let solidNumber = Math.round(props.children);
//   let solidStarImg = <img className="stars" src={starFilled} alt="stars" />;
//   let emptyStarImg = <img className="stars" src={starEmpty} alt="stars" />;

//   for (let i = 0; i < 5; i++) {
//     if (solidNumber > 0) {
//       starsArr.push(solidStarImg);
//       solidNumber--; // After adding a solid star, it decrements solidNumber by 1.
//       //This is done to keep track of how many solid stars are remaining to be added.
//     } else {
//       starsArr.push(emptyStarImg);
//     }
//   }
//   return (
//     <div>
//       <div>
//         <div className="stars-div">
//           {starsArr.map((elem, i) => (
//             <section key={i}>{elem}</section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Rating;
