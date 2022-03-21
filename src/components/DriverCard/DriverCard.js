
import Rating from "../Rating/Rating"
import "./DriverCard.css"


function DriverCard({ name, rating, img, car }) {
    return (
        <div className="driverCardContainer">
            <div className="driverAvatarContainer">
                <img className="driverAvatar" src={img} alt=""/>
            </div>
            <div className="driverInfo">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
            

        </div>
    )
}

export default DriverCard