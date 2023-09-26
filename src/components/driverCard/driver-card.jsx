import Rating from '../rating/rating';
import './driver-card.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <p className="car-info">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;