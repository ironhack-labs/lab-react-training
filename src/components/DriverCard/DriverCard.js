import './DriverCard.css'
import Rating from "../Rating/Rating"

const DriverCard = ({name, rating, img, car:{ model, licensePlate}}) => {
    return (
        <div className="driven-card">
            <div className='card-image'>
                <img src= { img } alt="profile" />
            </div>
            <div className='body-driven-card'>
                <h2> { name } </h2>
                <Rating className="rating">{rating}</Rating>
                <small> { model } -{ licensePlate } </small>
            </div>

        </div>
    )
}

export default DriverCard