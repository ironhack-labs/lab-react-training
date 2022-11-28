import Rating from "../Rating/Rating"
import "./DriverCard.css"

const DriverCard = props => {
    const { name, rating, img, car } = props

    return (
        <div className="card">
            <img src={img} alt="profilePic" />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard