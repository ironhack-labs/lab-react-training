import Rating from '../Rating/Rating';
import './DriverCard.css';

function DriverCard({ name, rating, img, car }) {

    const divStyle = {
        backgroundImage: `url(${img})`,
    }

    return (
        <div className="driver-card">
            <div className="driver-card__img" style={divStyle}>
                {/* <img src={img} alt={name} /> */}
            </div>
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>
    );
}

export default DriverCard;