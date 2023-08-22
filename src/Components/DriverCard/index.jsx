import Rating from "../Rating"

function DriverCard(props){
    return(
        <div className="driver-card">
            <div className="driver-image">
                <img src={props.img} alt="Picture"/>
            </div>
            <div className="driver-text">
                <p><b>{props.name}</b></p>
                <div className="rating-driver">
                    <Rating>{props.rating}</Rating>
                </div>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard