function Rating(props) {
  let numFillStar = Math.round(props.children);
  let fillStar = '★';
  let noFillStar = '☆';

  fillStar = fillStar.repeat(numFillStar);

  fillStar += noFillStar.repeat(5 - numFillStar);

  return <div>{fillStar}</div>;
}

export default Rating;

// const retrieveRating = (rating) => {
//   let answear = '';
//   for (let i = 0; i < 5; i++) {
//     if (i < Math.round(rating)) {
//       answear += '\u2605';
//     } else {
//       answear += '\u2606';
//     }
//   }
//   return answear;
// };

// const Rating = ({ rating }) => {
//   return (
//     <div className="rating-container">
//       <h3>{retrieveRating(rating)}</h3>
//     </div>
//   );
// };
