import Rating from "../Rating/Rating";
import "./DriverCard.css";
const DriverCard = ({ name, rating, img, car = {} }) => {
  return (
    <div className="driver-card m-auto mb-5">
      <div className="img-driver-card me-3">
        <img src={img} />
      </div>
      <div className="body-driver-card">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
