const DriverCard = ({ name, rating, img, car }) => {

    const driverStyle = {
        backgroundColor: 'blue',
        color: 'white',
        width: 600,
        height: 250
    }

    const imgStyle = {
        width: 100,
        height: 100
    }

    return (


        <div style={driverStyle}>
            <p>{name}</p>
            <p>{rating}</p>
            <img src={img} alt={img} style={imgStyle}></img>
            <p>{car.model} - {car.licensePlate}</p>

        </div>

    )
}

export default DriverCard

