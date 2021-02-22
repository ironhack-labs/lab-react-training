import React from 'react'
import Rating from './Rating';


const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div style={{border: '1px solid black', textAlign: 'center', width: '70vw', height: '19vw', backgroundColor:'#455EB5', borderRadius: '7em'}}>
            <img style={{width:'10vw', borderRadius: '6em'}} src={img} alt={name} />
            <p>Name: {name}</p>
            <p><Rating>{rating}</Rating></p>
            <p>{car.model} - {car.licensePlate}</p>
            
        </div>
    )
}

export default DriverCard
