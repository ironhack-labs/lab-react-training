import '../styles/DriverCard.css'
import Rating from './Rating'

function DriverCard(props) {
    return (
        <div className='DriverCard'>
            <div className='driver-pic'>
                <img src={props.img} alt='driver'/>
            </div>
            <div className='driver-details'>
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard