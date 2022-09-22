import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard-container">
      <div>
        <img src={img} alt="DriverCard"></img>
      </div>
      <div className='Content-container'>
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