import React from "react"

let DriverCard = ({name, rating, img, car}) => {
    const round = Math.round(rating)
    switch (round) {
        case 1:
            rating = <p>★☆☆☆☆</p>
            break;
        case 2:
            rating = <p>★★☆☆☆</p>
            break;
        case 3:
            rating = <p>★★★☆☆</p>
            break;
        case 4:
            rating = <p>★★★★☆</p>
            break;
        case 5:
            rating = <p>★★★★★</p>
    }
    return(
        <div>
        <p>Name: {name}</p>
        <p>Rating: {rating}</p>
        <img src={img} alt='' style={{width:300}}/>
        <p>Car: {car.model} {car.licensePlate}</p>
        </div>
    )
}

export default DriverCard