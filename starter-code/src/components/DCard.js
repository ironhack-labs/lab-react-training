import React from 'react';
import { DCard } from '../styles/components';

function Card(props) {
    let rate = props.rating;
    let message = '';

    if(rate < 1) {
        message = '0';
    } else if ( rate > .9 && rate < 1.5){
        message = 'x';
    } else if( rate >= 1.5 && rate < 2) {
        message = 'xx' ;
    } else if( rate >= 2 && rate < 3) {
        message = 'x x';
    } else if( rate >= 3 && rate < 4) {
        message = 'x x x';
    } else if (rate >= 4 && rate < 4.5) {
        message = 'x x x x';
    } else if (rate >= 4.5){
        message = 'x x x x x';
    }


    return (
        <DCard>
            <img src={props.img} alt="Driver"/>
            <h2>{props.name}</h2>
            <h2>{message}</h2>
            <p>{props.car.model} - {props.car.licensePlate}</p>

        </DCard>
    );
};

export default Card; 