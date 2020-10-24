import React from 'react'

export default function DriverCard(props) {
    let stars = Math.round(props.rating);
    let rating;
    switch (stars) {
      case  1:
        rating = '★☆☆☆☆';
        break;
      case 2:
        rating = '★★☆☆☆';
        break;
      case 3:
        rating = '★★★☆☆';
        break;
      case 4:
        rating = '★★★★☆';
        break;
      case 5:
        rating = '★★★★★';
        break;
      default:
        rating = '☆☆☆☆☆';
    }
    const BackgroundCol = {
        backgroundColor: "blue"
    }
    return (
        <div style={BackgroundCol} className="DriverCard">
            <div>{props.name}</div>
            <div>{rating}</div>
            <img src={props.img} alt="Driver-avatar"/>
            <div>{props.car.model}{props.car.licensePlate}</div>
        </div>
    )
}
