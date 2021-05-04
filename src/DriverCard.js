import Rating from './Rating';


export default function DriverCard(props) {

    return (
        <div className='driver'>
            <img src={props.img} style={{ borderRadius: '50%', width: '100px', height: '100px' }} alt="" />
            <div className='driverText'>
                <p><b>{props.name}</b></p>
                <p><Rating>{props.rating}</Rating></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )

}