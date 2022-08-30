import './Rating.css' 
const Rating = (props) => {
  const number = Math.round(props.children);
  const scoreRating = (num) => {
    switch (num) {
      case 0:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png"
            alt="ratingOneStar"
          />
        );
      case 1:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png"
            alt="ratingOneStar"
          />
        );
      case 2:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png"
            alt="ratingTwoStar"
          />
        );
      case 3:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png"
            alt="ratingThreeStar"
          />
        );
      case 4:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"
            alt="ratingFourStar"
          />
        );
      case 5:
        return (
          <img
            className="Star"
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png"
            alt="ratingFiveStar"
          />
        );
      default:
    }
  };
  return <div>{scoreRating(number)}</div>;
};
export default Rating;
