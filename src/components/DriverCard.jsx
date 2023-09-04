import Rating from './Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div
        className="DriverCard-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
