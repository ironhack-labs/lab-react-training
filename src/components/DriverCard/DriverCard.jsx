import Rating from "../Rating/Rating"
import './DriverCard.css'

const DriverCard = ({ driver }) => {
    const { name, rating, img, car } = driver
    return (
        <div className="d-center DriverCard">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard