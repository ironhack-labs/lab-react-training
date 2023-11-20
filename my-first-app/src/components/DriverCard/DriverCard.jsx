import Rating from "../Rating/Rating"
import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {

    return (
        <div className="cardContainer">
            <img className="profileImg" src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} {car.model.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard

