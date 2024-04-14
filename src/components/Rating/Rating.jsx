import './Rating.css';
import imgStar from '../../assets/images/star.svg';
import imgStarBlack from '../../assets/images/star-black.svg'

function Rating({ children }) {

  const number = Math.round(children);

  return (
    <div className="stars">
      <img src={(number >= 1) ? imgStarBlack : imgStar} alt="star"></img>
      <img src={(number >= 2) ? imgStarBlack : imgStar} alt="star"></img>
      <img src={(number >= 3) ? imgStarBlack : imgStar} alt="star"></img>
      <img src={(number >= 4) ? imgStarBlack : imgStar} alt="star"></img>
      <img src={(number >= 5) ? imgStarBlack : imgStar} alt="star"></img>
    </div>
  )
}

export default Rating;