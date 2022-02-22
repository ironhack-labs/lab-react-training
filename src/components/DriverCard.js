import Rating from "./Rating"

const DriverCard = props => {
    return (
        <div className="driverCardDiv">
            <img src={props.img} alt="driver-img" />
            <div className="driverInfo">
                <p><strong>{props.name}</strong></p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard