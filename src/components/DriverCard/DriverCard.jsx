import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    return (<div className="driver-card">

        <img src={img} />
        <p>{name}</p>

        <div><Rating>{rating}</Rating></div>


        <div>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </div>


    </div>)

}

export default DriverCard