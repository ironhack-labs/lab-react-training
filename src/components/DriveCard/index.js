import Rating from "../Rating";

function DriverCard (props){
    return(
    <div className="Driver-Card">
        <div>
        <img className="Img-Driver"width="150" height="150" src={props.img}/>
        </div>
        <div className="Driver-Content">
        <p><b>Name:</b>{props.name}</p>
        <p><Rating>{props.rating}</Rating></p>
        <p>{props.car.model} | {props.car.licensePlate}</p>
        </div>
    </div>
    )
}

export default DriverCard; 