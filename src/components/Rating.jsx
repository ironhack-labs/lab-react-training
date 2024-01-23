

const Rating = ({ children }) => {
  const roundedRating = Math.round(children);
  const stars = [];

  for (let completedStars = 0; completedStars < 5; completedStars++) {
    stars.push(
      <span key={completedStars} style={{ color: completedStars < roundedRating ? 'gold' : 'gray' }}>
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default Rating;