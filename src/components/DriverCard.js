import Rating from "./Raiting"
import './DriverCard.css'
const DriverCard = (props) => {

  return (
    <div className="container-drivercard">

      <div id="item-drivercard">
        <img src={props.img} alt="Avatar" className="avatar" />
        <p>{props.name}</p>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard