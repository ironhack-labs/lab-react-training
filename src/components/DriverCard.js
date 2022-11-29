import Rating from './Rating';

export default function DriverCard({
  name,
  rating,
  img,
  car: { model, licensePlate },
}) {
  return (
    <div className="driver-container">
      <div className="driver-img">
        <img src={img} alt={name} />
      </div>

      <div className="driver-details-col">
        <h4>{name}</h4>
        <div className="driver-rating">
          <Rating>{rating}</Rating>
        </div>
        <div className="driver-car-details">
          {model} - {licensePlate}
        </div>
      </div>
    </div>
  );
}
