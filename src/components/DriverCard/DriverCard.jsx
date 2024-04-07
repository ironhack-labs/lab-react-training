import './DriverCard.css';
import Rating from '../Rating/Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className='BoxDriverCard'>
        <img src={img} alt={`${name}`}/>
        <div className='driverInfo'>
            <h4>{name}</h4>
            <Rating>{rating}</Rating>
            <div>{`${car.model} - ${car.licensePlate}`}</div>
        </div>
    </div>
  )
}

export default DriverCard