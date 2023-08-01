const DriverCard = (props) => {

    const { name, rating, img, car } = props;

    return <div>
        <img src={img} width="80px"></img>
        <h3>{name}</h3>
        {/* Whitout Star Rating */}
        <p>{car.model} - {car.licensePlate}</p>
    </div>
}

export default DriverCard;