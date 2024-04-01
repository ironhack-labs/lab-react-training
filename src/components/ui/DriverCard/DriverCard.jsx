import './DriverCard.css'
import Rating from '../Rating/Rating';

function DriverCard({ name, rating, img, car }) {

  return (
    <div className='drivercard-container'>
      <img src={img} alt='pProfile photo' className='drivercard-image'/>
    
      <div className='drivercard-second-container'>
        <h3>{name}</h3>
        <Rating className='drivercard-rating'>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;