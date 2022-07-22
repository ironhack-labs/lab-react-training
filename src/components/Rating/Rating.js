import React from 'react';

const Rating = ({children}) => {
  const rating = Math.round(parseFloat(children));
  let stars ='';
  for (let i=0; i<5; i++) {
    stars.length < rating ? stars += `★` : stars += `☆`;
  }
  return(
    <h3>{stars}</h3>
  )
}
 export default Rating;

// const StarRating = () => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     return (
//       <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//           index += 1;
//           return (
//             <button
//               type="button"
//               key={index}
//               className={index <= (hover || rating) ? "on" : "off"}
//               onClick={() => setRating(index)}
//               onMouseEnter={() => setHover(index)}
//               onMouseLeave={() => setHover(rating)}
//             >
//               <span className="star">&#9733;</span>
//             </button>
//           );
//         })}
//       </div>
//     );
//   };

 


// The component should take 1 prop:

// children: A number between 0 and 5. The value can be a floating-point number. 
//If the number received is 3.9, the component should display 4 stars.