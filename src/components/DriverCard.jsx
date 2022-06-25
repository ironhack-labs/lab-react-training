import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  return (
    <div className='driver-card'>
      <div className="img" style={{ backgroundImage: `url(${img})`}}></div>

      <div className="info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{`${model} - ${licensePlate}`}</p>
      </div>
    </div>
  )
}

export default DriverCard;