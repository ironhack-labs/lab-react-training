import '../assets/styles/rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

function Rating(props) {
  let nbFullStars = Math.round(props.children);

  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i <= nbFullStars) {
      stars.push('full');
      continue;
    }

    stars.push('empty');
  }

  return (
    <div className="rating">
      {stars.map((star, index) => {
        if (star === 'full') {
          return <FontAwesomeIcon key={index} icon={faStarSolid} />;
        } else {
          return <FontAwesomeIcon key={index} icon={faStarRegular} />;
        }
      })}
    </div>
  );
}

export default Rating;
