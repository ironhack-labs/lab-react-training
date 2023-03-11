import Rating from '../rating/Rating'
import './driverCard.css'

const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className='drivercar-container'>
      <div className="driver-card">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div className="data">
          <h1>{name}</h1>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}  </p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard