import React from 'react';
import { DriverCard } from '../styles/components';

function DriverCardComponent(props) {
    let rate = props.rating;
    let message = '';

    if(rate < 1) {
        message = '0';
    } else if ( rate > .9 && rate < 1.5){
        message = '⭐️';
    } else if( rate >= 1.5 && rate < 2) {
        message = '⭐️⭐️' ;
    } else if( rate >= 2 && rate < 3) {
        message = '⭐️ ⭐️';
    } else if( rate >= 3 && rate < 4) {
        message = '⭐️ ⭐️ ⭐️';
    } else if (rate >= 4 && rate < 4.5) {
        message = '⭐️ ⭐️ ⭐️ ⭐️';
    } else if (rate >= 4.5){
        message = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️';
    }


    return (
        <DriverCard>
            <img src={props.img} alt="Driver"/>
            <h2>{props.name}</h2>
            <h2>{message}</h2>
            <p>{props.car.model} - {props.car.licensePlate}</p>

        </DriverCard>
    );
};

export default DriverCardComponent; 