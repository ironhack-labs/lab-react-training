import Rating from "./Rating"
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="container">
      <div>
        <img className="driverPhoto" src={img} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
