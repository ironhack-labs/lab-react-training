import "./DriverCard.css"
import Rating from "./../Rating/Rating.jsx"

function DriverCard(props) {

    return (
        <div className="driverCard">
            <div>
                <img className="driverImg" src={props.img} alt="driver´s profile image" />
            </div>
            <div>
                <h1>{props.name}</h1>
                <h3 className="stars"><Rating>{props.rating}</Rating></h3>
                <span><h5>{props.car.model}-{props.car.licensePlate}</h5></span>
            </div>
        </div>
    )
}

export default DriverCard;