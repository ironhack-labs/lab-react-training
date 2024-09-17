import './DriverCard.css'
import Rating from "../Rating/Rating";

function DriverCard({name, rating, img, car: {model, licensePlate}}) {

    return(
        <div className="driverCard__container--body">
            <img src={img} className='driverCard__img'></img>
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <h3>{model} {licensePlate}</h3>
            </div>
        </div>
    )
}

export default DriverCard;