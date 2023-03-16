import './DriverCard.css';
import Rating from '../Rating/Rating';

function DriverCard({ name, rating, img, car }) {

    return (
        <div className="driver-container">
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <Rating n={rating}/>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
};

export default DriverCard;