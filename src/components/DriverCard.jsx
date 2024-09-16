import Rating from './Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
    return (
        <div className="driverCard">
            <img src={img} alt={name} />
            <article className="info">
                <h5 className="driverName">{name}</h5>
                <Rating>{rating}</Rating>
                <p className="carDeets">{model} - {licensePlate}</p>
            </article>
        </div>
    )
}

export default DriverCard;
