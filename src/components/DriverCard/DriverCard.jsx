import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = props => {
    const roundRate = Math.floor(props.rating)
    // let rating = ''


    // switch (roundRate) {
    //     case 1:
    //         rating = "⭐☆☆☆☆"
    //         break;

    //     case 2:
    //         rating = "⭐⭐☆☆☆"
    //         break;

    //     case 3:
    //         rating = "⭐⭐⭐☆☆"
    //         break;

    //     case 4:
    //         rating = "⭐⭐⭐⭐☆"
    //         break;

    //     case 5:
    //         rating = "⭐⭐⭐⭐⭐"
    //         break;

    //     default:
    //         rating = "☆☆☆☆☆"
    //         break;

    // }
    return (
        <div className='driveCard'>
            <div> <img src={props.img} alt={props.name} /></div>
            <div>
                <p>{props.name}</p>
                {/* <p>{rating}</p> */}
                <Rating>{roundRate}</Rating>
                <p>{props.car.model}-{props.car.licensePlate}</p>
            </div>

        </div>

    )


}

export default DriverCard