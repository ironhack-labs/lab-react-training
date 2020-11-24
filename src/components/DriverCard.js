import '../style/DriverCard.css'
import React from 'react';


function DriverCard(props) {
    return (
        <div className="DriverCard">
        <img src={props.img} alt=""/>
            <div>
                <h1>{props.name}</h1>
                <h1>{rating(Math.round(props.rating))}</h1>
                <h3>{props.car.model} - {props.car.licensePlate}</h3>
            </div>
        </div>
    )

    function rating(rate) {
        switch (rate) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'

            case 2:
                return '★★☆☆☆'

            case 3:
                return '★★★☆☆'

            case 4:
                return '★★★★☆'

            case 5:
                return '★★★★★'

            default:
                throw new Error("No rating")
        }
    }

}

export default DriverCard;