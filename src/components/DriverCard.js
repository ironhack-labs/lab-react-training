function DriverCard(props) {
    const filledStars = Math.round(props.rating)
    const emptyStars = 5 - filledStars
    return (
        <div id="driverInfoContainer" className="rowContainer">
            <div id="imgContainer">
                <img src={props.img} alt="driver" className="driverImg" />
            </div>
            <div id="driverInfo" className="colContainer">
                <span className="headline">{props.name}</span>
                <span className="stars">
                    {'★'.repeat(filledStars) + '☆'.repeat(emptyStars)}
                </span>
                <span>
                    {props.car.model} - {props.car.licensePlate}
                </span>
            </div>

        </div>
    )
}

export default DriverCard;