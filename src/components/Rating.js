import React from 'react';

const Rating = props => {
	const rating = number => {
		let num = parseFloat(number);
		if (num >= 0 && num <= 0.49) {
			return '☆☆☆☆☆';
		} else if (num >= 0.5 && num <= 1.49) {
			return '★☆☆☆☆';
		} else if (num >= 1.5 && num <= 2.49) {
			return '★★☆☆☆';
		} else if (num >= 2.5 && num <= 3.49) {
			return '★★★☆☆';
		} else if (num >= 3.5 && num <= 4.49) {
			return '★★★★☆';
		} else if (num >= 4.5 && num <= 5) {
			return '★★★★★';
		}
	};

	console.log(rating(props.children));
	return (
		<div className="rating">
			<p>{rating(props.children)}</p>
		</div>
	);
};

export {Rating};