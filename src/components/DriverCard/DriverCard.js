import './DriverCard.css'
import Rating from "../Rating/Rating"


const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    return (
        <article className="driverCard">
            <img src={img} alt={name} />
            <div >
                <h6>{name}</h6>
                <Rating className="rating">{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </article>
    )
}

export default DriverCard