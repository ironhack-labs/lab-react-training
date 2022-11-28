import Rating from "../Rating/Rating";
import './DriverCard.css';
const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="drivercard-container">
            <div className="drivercard-left">
                <img src={img} alt="" />
            </div>
            <div className="drivercard-right">
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <p>{`${car.model} - ${car.licensePlate}`}</p>

            </div>
        </div>
    );
}

export default DriverCard;