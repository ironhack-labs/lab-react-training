import React from 'react';

function Rating({ children }) {
	const rate = Math.round(parseFloat(children));
	const stars = `${'★'.repeat(rate)}${'☆'.repeat(5 - rate)}`;

	return <div className='rating'>{stars}</div>;
}

export default Rating;
