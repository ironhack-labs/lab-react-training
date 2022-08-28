import "./DriverCard.css"
import Rating from "../rating/Rating"

function DriverCard({ name, rating, img, car}) {
  return(
    <div className="container my-3">
      <div className="driver-card py-3 d-flex justify-content-center">
        <div className="img-container me-3">
          <img src={img} alt={name} />
        </div>
  
        <div className="text-light">
          <h2>{name}</h2>
          <Rating>{rating}</Rating>
          <h6>{car.model} - {car.licensePlate}</h6>
        </div>
      </div>
    </div>
  )
}

export default DriverCard