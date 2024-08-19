import Rating from "./Rating"

/* eslint-disable react/prop-types */
function DriverCard(props) {
    const { name, rating, img, car } = props

    return (
        <div className="driverCard">
            <div className="circle-crop">
                <img src={img}></img>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <p style={{fontWeight: 'bold'}}>{name}</p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard