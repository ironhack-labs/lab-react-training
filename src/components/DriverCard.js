import Rating from '../components/Rating';
import './DriverCard.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <div className="licenseholder">
        <div className="picture">
          <img src={img} alt="profile" />
        </div>
        <div className="driverInfo">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <span>
            {' '}
            {car.model} - {car.licensePlate}{' '}
          </span>
        </div>
      </div>
    </div>
  );
}
export default DriverCard;
