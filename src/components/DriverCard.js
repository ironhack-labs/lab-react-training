import React from 'react';
import './DriverCard.css';
import {Rating} from './Rating';

const DriverCard = props => {

	return (
		<div>
			<div className="driver-card">
				<div>
					<img src={props.img} alt=""/>
				</div>
				<div>
					<p className="driver-card-name">{props.name}</p>
					<Rating>{props.rating}</Rating>
					<p>{props.car.model} - {props.car.licensePlate}</p>
				</div>
			</div>
		</div>
	);
};

export {DriverCard};