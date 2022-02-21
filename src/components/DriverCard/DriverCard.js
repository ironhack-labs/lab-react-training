import './DriverCard.css'
import Rating from '../Rating/Rating';

const DriverCard = ({
    name,
    rating,
    img,
    car
}) => {
    return (
        <div className="driverCard">
            <img src={img} alt="" />
            <div className='driver-card-content'>
                <span>{name}</span>
                <Rating>{rating}</Rating>
                <span>{car.model} - {car.licensePlate}</span>
            </div>
        </div>
    )
}

export default DriverCard;