import './DriverCard.css'
import Rating from './Rating'

function DriverCard({ name, img, rating, car }) {
    return (
        <div className="driverCard">
            <img src={img} alt="" />
            <div className='driver-data'>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model}
                    <span>{car.licensePlate}</span>
                </p>
            </div>
        </div>
    )
}

export default DriverCard