import PropTypes from 'prop-types';
import "./Rating.css"; 


const Rating = ({ children }) => {
    const roundedRating = Math.round(children);
    const stars = '★★★★★☆☆☆☆☆'.slice(5 - roundedRating, 10 - roundedRating);
  
    return (
      <div className="rating">
        {stars}
      </div>
    );
  };
  
  Rating.propTypes = {
    children: PropTypes.number.isRequired,
  };
  
  export default Rating;
