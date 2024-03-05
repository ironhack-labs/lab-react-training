const Rating = ({ children }) => {
  const filledStars = Math.round(Number(children));
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  const ratingDisplay = stars.join('');
  return <div>{ratingDisplay}</div>;
};
export default Rating;
