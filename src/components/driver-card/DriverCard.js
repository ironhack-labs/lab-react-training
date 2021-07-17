import Rating from "../rating/Rating";

function DriverCard(props) {
    return (
    <div className="DriverCard">
    <img src={props.img} />
    <div>
        <h3>{props.name}</h3>
        <div><Rating>{props.rating}</Rating></div>
        <h5>{props.car.model}-{props.car.licensePlate}</h5>
    </div>
    </div>
)
}

export default DriverCard