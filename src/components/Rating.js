function Rating(props) {
  let score = Math.floor(props.children);
  let filledStars = '★'.repeat(score);
  let emptyStars = '☆'.repeat(5 - score);
  return <span className="Ratings">{filledStars.concat(emptyStars)}</span>;
}
export default Rating;
