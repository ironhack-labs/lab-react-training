import Rating from "./rating"
const DriverCard = ({ name, rating, img, car }) => {


    return (
        <article>
            <img src={img} alt="profile" style ={{width:100}}/>
            <p>{name}</p>
            <Rating>{rating}</Rating>
            <p>{car.model}-{car.licensePlate}</p>
        </article>
    )
}

export default DriverCard