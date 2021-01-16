import React from 'react';
import Rating from '../rating/Rating';
import style from './DriverCard.module.css';

function DriverCard(props) {
    return (
        <div className={style.card}>
            <img className={style.avatar} src={props.img} alt={props.name} />
            <div className={style.driverInfo}>
                <h3>{props.name}</h3>
                <Rating>
                    {props.rating}
                </Rating>
                <span>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    )
}

export default DriverCard;