import React from 'react'
import '../App.css'

const DriverCard = (props) => (

        <article className="driver-card">
             <div>
              <img src={props.img} alt="Driver pp" width="80px" className="driver-image"/>
             </div>
              <div>
              <p>{props.name}</p>
              <p>{`${addRate(props.rating)}`}</p>
              <p>{props.car.model} - {props.car.licensePlate}</p>
             </div>
        </article>
)
let addRate = (rating) => {
    switch(Math.round(parseFloat(rating))){
        case 5:
            return "★ ★ ★ ★ ★"
        case 4:
            return "★ ★ ★ ★ ☆"
        case 3:
            return "★ ★ ★ ☆ ☆"
        case 2:
            return "★ ★ ☆ ☆ ☆"
        case 1:
            return "★ ☆ ☆ ☆ ☆"
        case 0:
            return "☆ ☆ ☆ ☆ ☆"
            default:
                return "Valoración Invalida"
    }
}

export default DriverCard