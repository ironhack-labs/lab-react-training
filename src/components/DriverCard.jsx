import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div className="DriverCard_ProfilePic">
        <img src={img} />
      </div>
      <div className="DriverCard_DriverInfo">
        <p>
          <strong>{name}</strong>
        </p>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;