import "./DriverCard.css"
import "../folderRating/Rating"
import Rating from "../folderRating/Rating"

function DriverCard(props) {
  return (
    <div className="container-driver">
      <div className="flex-driver">
        <div>
          <img className="img-driver" src={props.img} alt={`foto de: ${props.name}`} />
        </div>
        <div className="flex-info">
          <p className="name-driver">{props.name}</p>
          <p><Rating>{props.rating}</Rating></p>
          <p>{props.car.model} - {props.car.licensePlate}</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard