
import Rating from "./Rating"
import "./DriverCard.css"
function DriverCard(props) {

    const { name, rating, img, car: { model, licensePlate } } = props


    return (
        <article className="driverCard">

            <img className="licenseImg" src={img} alt={name} />
            <div className="driverInfo">
                <div>{name}</div>
                <Rating>{rating}</Rating>
                <div ><span>{model}</span>-<span>{licensePlate}</span></div>
            </div>
        </article>

    )
}




export default DriverCard