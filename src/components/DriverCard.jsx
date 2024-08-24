import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <div>
        <img src={img} alt={name} />
      </div>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
