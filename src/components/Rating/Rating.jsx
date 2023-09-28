/* eslint-disable react/prop-types */
const Rating = ({ children }) => {
  const AroundRating = Math.round(Number(children));
  const emptyStars = 5 - AroundRating;
  const stars = [];
  for (let i = 0; i < AroundRating; i++) {
    stars.push("★");
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push("☆");
  }
  return <div style={{ fontSize: "20px" }}>{stars}</div>;
};

export default Rating;
