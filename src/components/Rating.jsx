// eslint-disable-next-line react/prop-types
const Rating = ({ children }) => {
  const filledStars = Math.ceil(children);
  const emptyStars = 5 - filledStars;

  return (
    <div>
      {Array(filledStars).fill('★')}
      {Array(emptyStars).fill('☆')}
    </div>
  );
};

export default Rating;
