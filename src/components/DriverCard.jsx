import React from 'react'
import "./DriverCard.css"



function DriverCard(props) {
 
const { name, rating, img, car} = props


function star(children) {
    if ( children < 0.5) return '☆☆☆☆☆';
    else if ( children < 1.5) return '★☆☆☆☆';
    else if ( children < 2.5) return '★★☆☆☆';
    else if ( children < 3.5) return '★★★☆☆';
    else if ( children < 4.5) return '★★★★☆';
    else return '★★★★★';
    }

return (
<div className="driverCard">
    <div>
        <img className="headshot" src={img} alt="driverImg" />
    </div>
    <div>
        <h2>{name}</h2>
        <p>{star(rating)}</p>
        <p>{car.model} - {car.licensePlate}</p>
     </div>
</div>
)
}
export default DriverCard