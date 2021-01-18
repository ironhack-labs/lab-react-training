import React from 'react';
import './IdCard.css';

const IdCard = props => {
	const height = height => {
		return `${height[0]}.${height[1]}${height[2]}m`;
	};
	const birth = birth => {
		return new Date(birth).toDateString();
	};
	return (
		<div className="id-card">
			<div>
				<img src={props.picture} alt=""/>
			</div>
			<div>
				<ul>
					<li>First Name: {props.firstName}</li>
					<li>Last Name: {props.lastName}</li>
					<li>Gender: {props.gender}</li>
					<li>Height: {height(props.height)}</li>
					<li>Birth: {birth(props.birth)}</li>
				</ul>
			</div>
		</div>
	);
};

export {IdCard};