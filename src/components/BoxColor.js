import React from 'react';
import './BoxColor.css';


const BoxColor = props => {

	const background = `rgb(${props.r}, ${props.g}, ${props.b})`;

	const rgb = `${props.r}${props.g}${props.b}`;

	return (
		<div className="box-container">
			<div className="box-color" style={{backgroundColor: background}}>
				<p>{background}</p>
			</div>
		</div>
	);
};

export {BoxColor};