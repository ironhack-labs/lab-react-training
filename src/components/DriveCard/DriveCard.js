import Rating from "../Rating/Rating"
import "./DriverCard.css"


const DriveCard = ({
    name,
    rating,
    img,
    car
}) => {

    let { model, licensePlate } = car
    // let newRating = Math.round(rating)
    
    return(
        <article className="DriveCard">
            <img src={img} alt={name}/>
            <p>{name}</p>
            {/* <p>{newRating}</p> */}
            <Rating>{rating}</Rating>
            <p>{model}</p>
            <p>{licensePlate}</p>
        </article>



    )
}

export default DriveCard