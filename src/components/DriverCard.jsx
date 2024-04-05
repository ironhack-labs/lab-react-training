import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
	return (
		<div className='driver-card'>
			<div className='driver-img'>
				<img src={img} />
			</div>
			<div className='driver-info'>
				<h1>{name}</h1>
				<Rating>{rating}</Rating>
				<p>
					{car.model} - {car.licensePlate}
				</p>
			</div>
		</div>
	);
}

export default DriverCard;
