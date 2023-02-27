import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = props => {

    const { name, rating, img, car } = props

    return (
        <div className="driverCard">
            <div className="driverImage">
                <img src={img} alt={name} />
            </div>
            <div className="driverInfo">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard