import Rating from "../Rating/Rating"
import './DriverCard.css'

const DriverCard = ({name, rating, img, car: {model,licensePlate}}) => {



    return (
        <article className="drivercard">
            <img src={img} alt="driver" />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </article>
    )
}

export default DriverCard
