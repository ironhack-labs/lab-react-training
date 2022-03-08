import Rating from "../Rating/rating";
import "./DriverCard.css";

function DriverCard({ name, rating, img, car }) {
    return (
      <div className="driver-card" style={{ backgroundColor: '#0969da' }}>
        <div>
          <img className="driver-photo" src={img} alt="driver" />
        </div>
        <div className="driver-info">
          <h3>{name}</h3>
          <Rating style={{ color: 'white' }}>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
}

export default DriverCard;