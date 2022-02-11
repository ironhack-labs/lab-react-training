import './DriverCard.css';
import Rating from '../Rating';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-card-info">
        <div className="driver-card-name">{name}</div>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}
