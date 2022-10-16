import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className='license'>
      <div className="image">
        <img src={img} alt='picture'></img>
        
      </div>
      <div className='dados'>
        <h2> {name}</h2>
        <Rating> {rating}</Rating>
        <p> {car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
