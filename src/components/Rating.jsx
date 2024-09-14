const Rating = ({ children }) => {
  const fullStars = Math.round(children);
  const stars = Array(5)
    .fill("☆")
    .map((star, index) => (index < fullStars ? "★" : star));

  return <div className="flex mb-4 text-2xl">{stars.join("")}</div>;
};

export default Rating;
