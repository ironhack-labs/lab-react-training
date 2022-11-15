import Rating from "../components/Rating"
import './DriverCard.css'

function DriverCard (props){

const { name, rating, img, car } = props
const { licensePlate, model } = car

    return (
        <div className="conDriver">
                <div className="driverImg"><img className="bigImg" src={img} alt='' /></div>
            <div className="driverText">
                <h3>{name}</h3> 
                <h3><Rating>{rating}</Rating></h3>
                <div><h4>{model} - {licensePlate}</h4></div>
            </div>
        </div>
    )
}
export default DriverCard