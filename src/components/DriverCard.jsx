const DriverCard = ({ name, rating, img, car}) => {
    return(
        <div className="driverCard">
        <img className="imgDriver" src= {img}/>
        {name}
        {rating}
        <p>{`${car.model} - ${car.licensePlate}`}</p>
        </div>
    )
}

export default DriverCard