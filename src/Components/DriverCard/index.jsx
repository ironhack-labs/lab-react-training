import React from 'react';
import './index.css'



function DriverCard ({name, rating, img, car}) {

    let ratingStar = ''

    if(rating < 0.5) {
        ratingStar = '☆☆☆☆☆'
    } if(rating < 1.5 && rating >= 0.5) {
        ratingStar = '★☆☆☆☆'
    } if(rating < 2.5 && rating >= 1.5) {
        ratingStar = '★★☆☆☆'
    } if(rating < 3.5 && rating >= 2.5) {
        ratingStar = '★★★☆☆'
    } if(rating < 4.5 && rating >= 3.5) {
        ratingStar = '★★★★☆'
    } if(rating <= 5 && rating >= 4.5) {
        ratingStar = '★★★★★'
    } 
    return (
        <div className='DriverCard'>
            <img src={img}/>
            <div>
                <h2>{name}</h2>
                <p>{ratingStar}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};

export default DriverCard;