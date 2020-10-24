import React from 'react';
import './DriverCard.css'

export default function DriverCard(props) {
    console.log(props)
    const divStyle = {
        backgroundColor: 'blue',
        borderRadius: '5px',
        width: '300px',
        height: '120px',
        margin: '10px',
        color: 'white',
        display: 'flex',
        padding: '10px 50px',
    }
    const stars = Math.round(props.rating)
    const countStars = (stars) => {
        // if (stars === 0) {
        //     return '☆☆☆☆☆'
        // } else if(stars === 1) {
        //     return '★☆☆☆☆'
        // } else if(stars === 2) {
        //     return '★★☆☆☆'
        // } else if(stars === 3) {
        //     return '★★★☆☆'
        // } else if(stars === 4) {
        //     return '★★★★☆'
        // } else if(stars === 5) {
        //     return '★★★★★'
        // }
        switch(stars) {
            case 0:
                return '☆☆☆☆☆';
            case 1:
                return '★☆☆☆☆';
            case 2:
                return '★★☆☆☆';
            case 3:
                return '★★★☆☆';
            case 4:
                return '★★★★☆';
            case 5:
                return '★★★★★';
            default:
                console.log('no rating')
        }
    }
    return (
        <div style={divStyle}>
            <div>
                <img className="driverImage" src={props.img} alt=""></img>
            </div>
            <div>
                <p>{props.name}</p>
                <p>{countStars(stars)}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
