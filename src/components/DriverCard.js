import "./styles.css"

const DriverCard = (props) => {
    const {name, rating, img, car} = props

    const ratingRounded = Math.round(rating)
    const stars = "★".repeat(ratingRounded)+"☆".repeat(5-ratingRounded)

    return (
        <div className="driverCard">
            <img src={img} alt="image" />
            <h3>{name}</h3>
            <p>{stars}</p> 
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    )
}

export default DriverCard