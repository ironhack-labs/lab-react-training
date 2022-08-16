import './Rating.css';

function Rating(props) {
  const { children } = props;

  const numberRounded = (number) => {
    return Math.round(number);
  };

  let blackStars = '★';
  let whiteStars = '☆';

  return (
    <div className="white-stars">
      {whiteStars.repeat(5)}
      <div className="black-stars">
        {blackStars.repeat(numberRounded(children))}
      </div>
    </div>
  );
}

export default Rating;
