const DriverCard = props => {
    const {name, rating, img, car} = props;
    return (
        <div className="DriverCard">
            <div className="img-driver">
                <img src={img} />
            </div>
            <div>
                <h2>{name}</h2>
                <rating children={rating} />
                <h2>{car.model} {car.licensePlate}</h2>
            </div>
        </div>
    )
}

export default DriverCard;