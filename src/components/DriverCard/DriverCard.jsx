import Rating from "../Rating/Rating.jsx"
import './DriverCard.css'

const DriverCard = (props) => {
    return (
        <div className="driverCard">
            <div className="driverImg" >
                <img src={props.img} alt="profile" />
            </div>
            <div className="driverBody">
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard