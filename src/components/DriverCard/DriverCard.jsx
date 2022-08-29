import './DriverCard.css'
import Rating from '../Rating/Rating';

function DiverCard({ name, rating, img, car }) {

  return (
    <div className='driver-card'>
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div className='d-flex flex-row'>
          <h4>{car.model} - {car.licensePlate}</h4>
        </div>
      </div>
    </div>
  )
}

export default DiverCard