import './DriverCard.css'
import Rating from "../Rating/Rating"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className='driverCard'>
            <div className='cardImage'>
                <img src={img} alt={name} />
            </div>
            <ul>
                <li><h3>{name}</h3></li>
                <li><Rating>{rating}</Rating></li>
                <li><p>{model}-{licensePlate}</p></li>
            </ul>
        </div>
    )

}

export default DriverCard