import emptyStar from '../assets/images/empty-star.svg';
import fillStar from '../assets/images/fill-star.svg';

function Ratings(props) {
  const { children } = props;

  const roundNumber = Number(Math.round(children));

  return (
    <div className="rating">
      {roundNumber >= 1 ? (
        <img src={fillStar} alt="star" />
      ) : (
        <img src={emptyStar} alt="star" />
      )}
      {roundNumber >= 2 ? (
        <img src={fillStar} alt="star" />
      ) : (
        <img src={emptyStar} alt="star" />
      )}
      {roundNumber >= 3 ? (
        <img src={fillStar} alt="star" />
      ) : (
        <img src={emptyStar} alt="star" />
      )}
      {roundNumber >= 4 ? (
        <img src={fillStar} alt="star" />
      ) : (
        <img src={emptyStar} alt="star" />
      )}
      {roundNumber >= 5 ? (
        <img src={fillStar} alt="star" />
      ) : (
        <img src={emptyStar} alt="star" />
      )}
    </div>
  );
}

export default Ratings;
