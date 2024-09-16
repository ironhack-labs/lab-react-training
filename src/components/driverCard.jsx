import Rating from "./rating"
const DriverCard = (props) => {
    return (
        <div className="driver-card">
            <img src={props.img} alt="DriverPicture" />
            <div className="driver-info">
                <p>{props.name}</p>
                <h2>
                    <Rating>{props.rating}</Rating>
                </h2>
                <p>
                    {props.car.model} - {props.car.licensePlate}
                </p>
            </div>
        </div>
    )
}

export default DriverCard