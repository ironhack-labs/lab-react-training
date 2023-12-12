import "./drivercard.css"
import Rating from "../rating/Rating";

function DriverCard({ name, rating, img, car }) {
    const { model, licensePlate } = car;

    return (
        <div>
            <img src={img} style={{ width: '200px' }} />
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <h3>{model}-{licensePlate}</h3>
        </div>
    )
}

export default DriverCard
