import Rating from "./Rating";
import './DriverCard.css'
const DriverCard = ({ name, rating, img, car }) => {
    return (
      <div className="driver-card">
        <img src={img} alt={name} />
        <div>
          <h2>{name}</h2>
          <p><Rating>{rating}</Rating></p>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  };
  
  export default DriverCard;