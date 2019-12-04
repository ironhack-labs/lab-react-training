import React from 'react';

function IdCard(props) {
	console.log(typeof props.birth);
	return (
		<div className='card-container'>
			<img className='card-image' src={props.picture} alt='' />
			<div className='card-content'>
				<p>First name: {props.firstName}</p>
				<p>Last name: {props.lastName}</p>
				<p>Gender: {props.gender}</p>
				<p>Height: {props.height}</p>
				<p>Birth: {props.birth.toLocaleString()}</p>
			</div>
		</div>
	);
}

export default IdCard;
