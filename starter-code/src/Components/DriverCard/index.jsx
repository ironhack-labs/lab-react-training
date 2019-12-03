import React, { Component } from 'react';
import './styles.scss';

class DriverCard extends Component {
	render() {
		const {
			name,
			rating,
			// img,
			car
		} = this.props;

		// const picture = <img src="./visa.png" alt="" />;

		return (
			<div className="DriverCard">
				<h3 className="driverH3"> {name}</h3>
				<h2 className="stars"> {rating} </h2>
				<p>
					{car.model} - {car.licensePlate}
				</p>
			</div>
		);
	}
}

export default DriverCard;
