import './DriverCard.css'

import Rating from "../Rating/Rating"

const DriverCard = ({ name, img, rating, car: { model, licensePlate } }) => {

    return (
        <article className="driverCard">
            <img src={img} alt={name} />
            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </article>
    )
}

export default DriverCard