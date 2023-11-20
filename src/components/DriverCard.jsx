const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {

    return (
        <div className="DriverCard">
            <img className="left" src={img} />
            <div className="right">
                <h2>{name}</h2>
                <div className="Rating">{rating}</div>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>)

}

export default DriverCard