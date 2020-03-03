import React from 'react';

const Rating = props => {
	const number = Math.round(Number(props.children));
	const emptyStar = '☆';
	const fullStar = '★';

	return <div className="Rating">{fullStar.repeat(number) + emptyStar.repeat(5 - number)}</div>;
};

export default Rating;
