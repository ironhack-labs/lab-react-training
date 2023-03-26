import './Index.css';
import Rating from '../Rating/Index';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div>
        <img className="img" src={img} alt="img" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>  
    </div>
  );
}

export default DriverCard;
