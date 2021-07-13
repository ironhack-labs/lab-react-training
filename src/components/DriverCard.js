import React from 'react'

export default function DriverCard(props) {
    let star;
    if (props.rating < 0.5) {
        star = '☆☆☆☆☆'
    }
    else if (props.rating < 1.5 && props.rating >= 0.5 ) {
        star = '★☆☆☆☆'
    }
    else if (props.rating < 2.5 && props.rating >= 1.5) {
        star = '★★☆☆☆'
    }
    else if (props.rating < 3.5 && props.rating >= 2.5) {
        star = '★★★☆☆'
    }
    else if (props.rating < 4.5 && props.rating >= 3.5) {
        star = '★★★★☆'
    }
    else {
        star = '★★★★★'
    }
    
    return (
        <div>
          <p>{props.name}</p>
          <p>{star}</p>
          <p>{props.car.model} - {props.car.licensePlate}</p>  

        </div>
    )
}
