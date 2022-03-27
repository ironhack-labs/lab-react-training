import './DriverCard.css';
import Rating from '../rating/Rating';
const DriverCard = ({ name, rating, img, car }) => {
  return (
    
      <div
        className="DriverCardContainer"
        style={{ backgroundColor: '#373F51' }}
      >
        <div>
          <img className="Img" src={img} alt="..." />
        </div>
        <div>
          <p className="DriverName">{name}</p>
          <p className="Rating"><Rating>{rating}</Rating></p>
          <p className="CarInfo">
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>

  );
};

export default DriverCard;
