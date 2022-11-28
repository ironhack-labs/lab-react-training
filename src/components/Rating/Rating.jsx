import './Rating.css';

const Rating = (props) => {
  let roundedStars = Math.floor(props.children);
  const star = '★';
  const empty = '☆';

  return (
    <div className="Rating">
      <p>
        {star.repeat(roundedStars)}
        {empty.repeat(5 - roundedStars)}
      </p>
    </div>
  );
};

export default Rating;
