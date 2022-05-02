import Rating from "./../Iteration6/Rating"
import "./styles.css"

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="driverCard">
            <div className="driverImg">
                <img src={img} alt={name} />
            </div>
            <div className="driverInfo">
                <h5>{name}</h5>
                <Rating>{rating}</Rating>
                <h6>{car.model} - {car.licensePlate}</h6>
            </div>
        </div>
    )
}

export default DriverCard