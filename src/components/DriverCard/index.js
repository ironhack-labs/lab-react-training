import "./index.css"
import { Rating } from "../Rating"


export const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className="DriverCard">
      <div className="DriverImg">
      <img src={img} alt="driver"/>
      </div>
      <div className="DriverInformation">
      <h2>{name}</h2>
      <h2><Rating>{rating}</Rating></h2>
      <h3>{car.model}-{car.licensePlate}</h3>

      </div>
    </div>
  )
}
