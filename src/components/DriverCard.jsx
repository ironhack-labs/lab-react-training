import PropTypes from 'prop-types';

import "./DriverCard.css"; 

import Rating from './Rating';


const DriverCard = ({ name, rating, img, car }) => {
    return (
      <div className="driver-card">
        <img src={img} alt={name} className="driver-card__img" />
        <div className="driver-card__info">
          <h2>{name}</h2>
          <Rating className= "rating">{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  };
  
  DriverCard.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    img: PropTypes.string,
    car: PropTypes.shape({
      model: PropTypes.string,
      licensePlate: PropTypes.string,
    }),
  };
  
  export default DriverCard;