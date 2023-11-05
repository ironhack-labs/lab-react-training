import '../styles/DriverCard.css'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div className='DriverCard'>
            <div className='driver-pic'>
                <img src={props.img} alt='driver'/>
            </div>
            <div className='driver-details'>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}