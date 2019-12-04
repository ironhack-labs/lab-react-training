import React from 'react';

const Random = ({ res, min, max }) => {
	return (
		<div className='random-container'>
			<p>{`Random number between and ${min} ${max} => ${res}`}</p>
		</div>
	);
};

export default Random;
