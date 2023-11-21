import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({ name, rating, img, car}) => {
    const { model, licensePlate } = car
    return (
        <div>
            <img src={img} style={{width:'200px'}} alt="" />
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{model}-{licensePlate  }</p>
        </div>
    )
}
export default DriverCard
