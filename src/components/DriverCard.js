import Rating from "./Rating"

const DriverCard = props => {
    const { name,rating,img,car:{model,licensePlate} } = props
    

    return (
        <div className="driverCard">
            <img src={img} alt={name} />
            <div className="bodyContent">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <span>{model} - {licensePlate}</span>
            </div>
        </div>
    )
}

export default DriverCard;