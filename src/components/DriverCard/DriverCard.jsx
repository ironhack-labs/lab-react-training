import Rating from "../Rating/Rating"
import "./DriverCard.css"

function DriverCard(props) {
    // console.log(props)
    return (
        <>
            <h1>{props.name}</h1>
            <h2><Rating>{props.rating}</Rating></h2>
            <div>
                <img className="img" src={props.img} alt="alternative-img" />
            </div>
            <h4>{props.car.model}</h4>
            <h5>{props.car.licensePlate}</h5>

        </>
    )
}

export default DriverCard;

