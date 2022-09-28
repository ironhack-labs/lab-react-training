import Rating from './Rating'

function DriverCard(props){
    return(
        <div id="driver-card">
            <img src={props.img} />
            <div id='driver-info'>
                <h1>{props.name}</h1>
                <Rating>{props.rating}</Rating>
                <h2>{props.car.model} - {props.car.licensePlate}</h2>
            </div>
        </div>
    )
}

export default DriverCard;