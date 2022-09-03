import "./driverCard.css"
import Rating from "../rating/rating"
function DriverCard({name, rating, img, car}){
  return(
    <div  className="driver-card-box">
        <img class="driver-card-box-img" src={img} alt="hey" />
        <div>
            <div className="ms-3 mt-3">
                <h3>{name}</h3>
                <Rating className="rating-size">{rating}</Rating>
                 <h6>{car.model}-{car.licensePlate}</h6>
            </div>
        </div>
    </div>
  )
}

export default DriverCard