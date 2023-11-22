import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    return (

        <div className="DriveCard">
            <img src={img} alt={name} />
            <p>{name}</p>
            <Rating>{Number(rating)}</Rating>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </div>

    )
}

export default DriverCard