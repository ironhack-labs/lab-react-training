import React from 'react'

export default function DriverCard(props) {
    
    const printStars = () => {

        const number = Math.round(props.rating)
            switch(number) {
                case 5:
                    return "★★★★★"
                case 4:
                    return "★★★★☆"
                case 3:
                    return "★★★☆☆"
                case 2:
                    return "★★☆☆☆"
                case 1:
                    return "★☆☆☆☆"
                case 0:
                    return "☆☆☆☆☆"
            }
        }
    
    
    return (
        <div className="driver-card">
        <img  src={props.img}/>
            <div>
                <p>{props.name}</p>
                <p>{printStars()}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>

        </div>
    )
}
