import Rating from './Rating'
function DriverCard(props){
    return (
        <div className="DriverCard">
            <img src={props.img} alt=""/>
            <div>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <h3>{props.car.model} - {props.car.licensePlate}</h3>           
            </div>
        </div>
    )
}
export default DriverCard;