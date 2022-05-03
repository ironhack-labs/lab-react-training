import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (

        <div className="driver-card">
                <img src={img} alt="profile-img" />
            < div className="driver-info">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{model} - {licensePlate}</p>
            </div >
        </div >

    )
}

export default DriverCard
