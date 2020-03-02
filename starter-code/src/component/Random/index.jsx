import React from 'react';

const Random = props => {
	const min = props.min;
	const max = props.max;
	const number = min + Math.floor(Math.random() * (max - min));

	return (
		<div className="box">
			Random value between {min} and {max} = {number}
		</div>
	);
};

export default Random;
