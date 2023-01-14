//Import the rating component to use in this component
import Rating from "./Rating";
import '../style/DriverCard.css'

function DriverCard(props) {

    const {
        name,
        rating,
        img,
        car: { model, licensePlate }
    } = props

    return (
        <div className="DriverCard">
            <div className="image-cropper">
                <img src={img} alt="profileImage" />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <Rating>{rating}</Rating>
                <h5>{model} {licensePlate}</h5>
            </div>

        </div>
    )
}

export default DriverCard;