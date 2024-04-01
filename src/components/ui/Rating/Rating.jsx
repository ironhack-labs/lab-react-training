import './Rating.css';
import star from '../../../assets/images/star-regular.svg';
import solidStar from '../../../assets/images/star-solid.svg';

function Rating({ children }) {

  const roundNumber = Math.round(children);
  const difference = 5 - roundNumber;

  const stars = (number, starIcon) => {
    return [...Array(number)].map((_, index) => {
      return <img key={index} src={starIcon} alt='star' className='star'/>
    });
  }

  return (
    <div className='rating-container'>
      {stars(roundNumber, solidStar)}
      {stars(difference, star)}
    </div>
  );
}

export default Rating;