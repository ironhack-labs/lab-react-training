import './DriverCard.css';

const Rating = ({ children }) => {
    const roundedRating = Math.round(children);
    const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  
    return (
      <div className="driver-card-rating">
        <p>{stars}</p>
      </div>
    );
  };
  
  const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="driver-card">
        <img src={img} alt={name} />
        <div className="driver-info">
        <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
        </div>
    );
  };

export default DriverCard;