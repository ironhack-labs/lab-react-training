import "./DriverCard.css"
import Rating from "../Rating/Rating"

const DriverCard = ({name, rating, img, car}) =>{
let {model, licensePlate} = car

    return(
        <article className="driver">
            <img src={img}></img>
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </article>
    )
}

export default DriverCard