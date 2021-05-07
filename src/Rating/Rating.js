import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// export default function Rating(props) {
//   const { children } = props;
//   const rating = children;
//   console.log(rating);

//   document.addEventListener('DOMContentLoaded', getRatings);

//   function getRatings() {
//     console.log('ran');
//     const starsRounded = Math.round(children);
//     console.log(starsRounded);

//     return (
//       <div>
//         {[...Array(5)].map((star, i) => {
//           getRatings();
//           const rated = i + children;
//           return <FaStar color={children >= rating ? '#ffc107' : '#e4e5e9'} />;
//         })}
//       </div>
//     );
//   }
// }

//   function updateRating(children) {
//     setRating(rating + children);
//     console.log(children);
//   }

export default function Rating(props) {
  const { children } = props;
  const [rating, setRating] = React.useState(null);
  //   or 0

  function updateRating(children) {
    setRating(rating + children);
    console.log(children);
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const rated = i + children;
        return <FaStar color={children >= rating ? '#ffc107' : '#e4e5e9'} />;
      })}
    </div>
  );
}

// https://www.youtube.com/watch?v=o3SfcNBZy4k try out this one
