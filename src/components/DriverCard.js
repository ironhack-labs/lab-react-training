import Rating from './Rating';

const { default: BoxColor } = require("./BoxColor")

const DriverCard = (props) => {
    let imgDriver = props.img
    return <div className="div-drivercard">
        <img className="img-driver" src={imgDriver}></img><br/>
        <div>        
            <p>{props.name}</p><br/>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p><br/>
        </div>

    </div>
}







export default DriverCard