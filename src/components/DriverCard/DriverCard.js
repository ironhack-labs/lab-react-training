import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    const {model, licensePlate} = car
    
    return (

        <article className="DriverCard">
                <img src={img} alt="Driver" />
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>{model}/{licensePlate}</p>
        </article>
    )
}

export default DriverCard