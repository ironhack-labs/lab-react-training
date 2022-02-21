import "./DriverCard.css"

function DriverCard({name, rating, img, car}) {
    return (
        <div className="driversCard">
            <img src={img} alt={name}/>

            <div>
                <p style={{fontSize: "2em", fontWeight: "bold"}}>{name}</p>
                <p>{rating.toString()}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard