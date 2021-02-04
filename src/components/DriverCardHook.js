import React, {useState} from 'react'
import Rating from './Rating';


export default function DriverCardHook({name, rating, img, car}) {
    return (
        <div className='driverCont'>
            <img src={img}/>
            <div>
                <p><strong>{name}</strong> </p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
