import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img className="img-driver-card" src={img} alt={name}></img>
      <div className="writingCard">
        <h2 className="details nameCard">{name}</h2>
        <Rating className="details">{rating}</Rating>
        <p className="details">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
