import Rating from "../Rating/Rating"
import './DriverCard.css'

const DriverCard = (dataDriver) => {
    const { name, rating, img } = dataDriver
    const { model, licensePlate } = dataDriver.car
    return (
        <div className="driveCard">
            <img className="driverImg" src={img} alt="" />
            <div className="dataDriver">
                <p>{name}</p>
                <Rating children={rating}></Rating>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )

}
export default DriverCard;