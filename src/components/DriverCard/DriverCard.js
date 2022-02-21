import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car}) => {
    const {model, licensePlate} = car


    return (

        <div className="DriverCard">
            <p>{name}</p>
            <Rating>{rating}</Rating>
           <img src={img} alt='driver'/>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </div>
    )
}

export default DriverCard