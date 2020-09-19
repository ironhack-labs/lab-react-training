import React from 'react';

export default function DriverCard(props) {
    const fullStar = '★';
    const emptyStar = '☆';
    const rating = Math.round(Number(props.rating));

        return (
            <div style={{backgroundColor: '#0366d6', color: 'white'}} className="driver-card">
                <div>
                <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={props.img}></img>
                </div>
                <div>
                <p>{props.name}</p>
                <div>{fullStar.repeat(rating)}{emptyStar.repeat(5-rating)}</div>
                <p>
                    {props.car.model} - {props.car.licensePlate}
                </p>
                </div>
            </div>

        )
}