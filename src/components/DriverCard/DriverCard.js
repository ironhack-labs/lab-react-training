import './DriverCard.css'
import Rating from "../Rating/Rating"


const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    return (
        <article className="DriverCard">
            <img src={img} alt="foto" />
            <div className="info">
                <h6>{name}</h6>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </article>
    )
}

export default DriverCard