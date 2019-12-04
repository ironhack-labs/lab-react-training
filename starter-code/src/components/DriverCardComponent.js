import React from 'react';
import { DriverLicense } from "../styles/components";

function DriverCardComponent(props) {

    return (
        <DriverLicense>
        <img src={props.img} alt='profile'/>
        <div>
            <p>Name: {props.name}</p>
            <p>Rating {props.rating}</p>
            <p>
            {props.car.model} - {props.car.licensePlate}
            </p>

        </div>
        </DriverLicense>
    )
}

export default DriverCardComponent;