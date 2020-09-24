import React from 'react';
import './DriverCard.css';

export default function DriverCard(props) {
    const { name, rating, img, car } = props;
    const star = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★',
    };
    return (
        <div>
            <p>
                <img src={img} alt={name}/>
                <br/>{name}
                <br/>{star[Math.round({ rating })]}
                <br/>{car.model} {car.licensePlate}
                <br/>
            </p>
        </div>
    );
}