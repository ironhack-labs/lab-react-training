import './DriverCard.css';
import Rating from '../Rating/Rating.js';

const DriverCard = (props) => {
    console.log(props.car);

    return (
        <div className="driver-card container">
            <img src={props.img} alt="" />
            <div className="driver-card-content">
                <h4>{props.name}</h4>
                <p className="driver-card-rating"><Rating>{props.rating}</Rating></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
};

export default DriverCard;