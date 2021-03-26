import React from 'react';
import '../assets/css/DriverCard.css'

const DriverCard = ({img, name, rating, car}) => {

    const stars = () => {
        switch (true) {
            case rating < 0.5:
                return '☆☆☆☆☆'
                break;
            case rating >= 0.5 && rating < 1.5: 
                return '★☆☆☆☆'
                break;
            case rating >= 1.5 && rating < 2.5:
                return '★★☆☆☆'
                break;
            case rating >= 0.5 && rating < 3.5:
                return '★★★☆☆'
                break;
            case rating >= 0.5 && rating < 4.5:
                return '★★★★☆'
                break;
            case rating >= 4.5:
                return '★★★★★'
                break;
            default:
                return 'No rating';
        }
    }

    return (
        <div className='DriverCard'>
            <img className='DriverImg' src={img}></img>
            <div className='DriverInfo'>
                <h2>{name}</h2>
                <p className='DriverRating'>{stars()}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;