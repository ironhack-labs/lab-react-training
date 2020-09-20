import React from 'react';
import './DriverCard.css';

export default function DriverCard(props) {
    const fullStar = '★';
    const emptyStar = '☆';
    const rating = Math.round(Number(props.rating));

        return (
            <div className="Driver-card">
                <div>
                    <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={props.img}></img>
                </div>
                <div className="Driver-info">
                    <p>{props.name}</p>
                    <div>{fullStar.repeat(rating)}{emptyStar.repeat(5-rating)}</div>
                    <p>
                        {props.car.model} - {props.car.licensePlate}
                    </p>
                </div>
            </div>

        )
}