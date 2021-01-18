import React from 'react';
import './Border.css';


const Random = props => {

	const random = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	return (
		<div className="border">
			<p>Random value
				between {props.min} and {props.max} => {random(props.min, props.max)}</p>
		</div>
	);
};

export {Random};