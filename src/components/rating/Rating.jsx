import star from '../../assets/images/star.svg';
import starFull from '../../assets/images/star-full.svg';
import './rating.css';

const Rating = ({ children }) => {
  const stars = 5;
  const rating = parseInt(Math.round(children));

  return (
    <div className="rating-container">
      {[...new Array(stars)].map((singleStar, i) => {
        return i < rating ? (
          <img src={starFull} alt="starFull" key={i} />
        ) : (
          <img src={star} alt="star" key={i} />
        );
      })}
    </div>
  );
};

export default Rating;
