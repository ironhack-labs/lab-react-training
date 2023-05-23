import './DriveCard.css'
import Rating from '../Rating/Rating'

const DriveCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className='DriveCards' style={{}}>
            <img src={img}></img>
            <p className='driverName'>{name}</p>
            <Rating>{rating}</Rating>

            <p className='info'>{model}- {licensePlate}</p>
        </div>
    )

}


export default DriveCard