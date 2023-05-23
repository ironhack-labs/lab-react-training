import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    const starsNum = Math.round(rating)

    return (
        <div className="driverCard">
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <Rating>{starsNum}</Rating>
                <p> {model} - {licensePlate} </p>
            </div>
        </div>
    )
}

export default DriverCard
