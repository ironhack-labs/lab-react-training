import './DriverCard.css';
import Rating from '../Rating/Rating';

function DriverCard({ name, rating, img, car }) {

  return (
    <div className='driver-card'>
      <div className="image-driver"><img src={img}></img></div>
      <div className="info-driver">
        <div className="name-driver"><b>{name}</b></div>
        <Rating children={rating} className="rating"/>
        <div className="car">{car.model} - {car.licensePlate}</div>
      </div>
    </div>
  )
}

export default DriverCard;