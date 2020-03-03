import React from 'react';
import Rating from './../Rating';

const DriverCard = props => {
	const { name, rating, img, car } = props;

	return (
		<div className="DriverCard">
			<img className="left" src={img} alt="Driver" />
			<div className="right">
				<h2>{name}</h2>
				<div className="Rating">
					<Rating>{rating}</Rating>
				</div>
				<p>
					{car.model} - {car.licensePlate}
				</p>
			</div>
		</div>
	);
};

export default DriverCard;
