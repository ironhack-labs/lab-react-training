import './DriveCard.css'
import Rating from '../Rating/Rating'

const DriveCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (
        <div className='DriveCards' style={{}}>
            <img src={img}></img>
            <p>{name}</p>
            <Rating>{rating}</Rating>

            <p>{model}- {licensePlate}</p>
        </div>
    )

}


export default DriveCard