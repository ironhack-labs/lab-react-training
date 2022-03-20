import Rating from "../Rating/Rating";
import './DriverCard.css'

function DriverCard(props) {

    return (
        <div className="DriverCard">
            <img className="imgRounded" src= {props.img}/>
                <div className="right">
                    <h2>{props.name}</h2>
                    <div className="d-flex justify-content-center">
                        <Rating>{props.rating}</Rating>
                    </div>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
        </div>
    )
}

export default DriverCard
