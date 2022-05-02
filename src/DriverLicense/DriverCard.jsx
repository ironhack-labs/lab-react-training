import './DriverCard.css'

const DriverCard= ({ name, rating, img, car  }) => { 

    let value = Math.round(rating)
    let stars = value

    if (value === 0){
        stars = <h1>☆☆☆☆☆</h1>
    }
    if (value === 1){
        stars = <h1>★☆☆☆☆</h1>
    }
    if (value === 2){
        stars = <h1>★★☆☆☆</h1>
    }
    if (value === 3){
        stars = <h1>★★★☆☆</h1>
    }
    if (value === 4){
        stars = <h1>★★★★☆</h1>
    }
    if (value === 5){
        stars = <h1>★★★★★</h1>
    }

    
    return (
    <div className="driverCard">
        <div className="driverCardContent">
            <div className="driverImage">
                <img src={img} alt="" />
             </div>
         <div className="driverInfo">
                <p><strong>{name}</strong></p>
                <p>{stars}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    </div>
   
    )
}

export default DriverCard

