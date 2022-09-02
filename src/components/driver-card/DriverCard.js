import './DriverCard.css'
import Rating from '../rating/Rating';

function DriverCard({ name, rating, img, car}) {
  return(
    <div className="container my-3">
      <div className="driver-card py-4 flex-row justify-content-center">
        <div className="driver-img mx-5">
          <img src={img} alt={name} className="align-self-center"/>
        </div>
  
        <div className="text-light py-4">
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <h6 className='mt-3'>{car.model} - {car.licensePlate}</h6>
        </div>
      </div>
    </div>
  )
}

export default DriverCard