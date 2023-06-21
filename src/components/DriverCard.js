import Rating from "./Rating"

function DriverCard(props){

    let car = props.car
    return (
        <div>
            <div>
                <img src={props.img} />
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.rating}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )

    

}
export default DriverCard