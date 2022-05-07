import Rating from "./Rating";

function DriverCard (props) {

    return (
        <div className="driverCard">
            <img src={props.img} alt="driver" width={100} height={100}></img>
            <div className="textCard">
                <p>{props.name}</p>
                <Rating children={props.rating}/>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )

}

export default DriverCard;