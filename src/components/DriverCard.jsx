import Rating from "./Rating";

const DriverCard = (props) => {
    return(
        <div className="driver-card">
            <div className="driver-img-div">
                <img className="driver-pic" src={props.img} alt="profile-img" style={{ borderRadius: '50%' }} />
            </div>

            <div className="driver-info">
                <p className="driver-name">{props.name}</p>
                <div id="driver-rating"><Rating color="white">{props.rating}</Rating></div>
                <p className="car-info">{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;
