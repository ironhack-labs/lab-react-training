import React from "react";


const Rating = ({ rate }) => {
	let rating;
	switch (Math.round(rate)) {
		case 0:
			rating = "☆ ☆ ☆ ☆ ☆";
			break;
		case 1:
			rating = "★ ☆ ☆ ☆ ☆";
			break;
		case 2:
			rating = "★ ★ ☆ ☆ ☆";
			break;
		case 3:
			rating = "★ ★ ★ ☆ ☆";
			break;
		case 4:
			rating = "★ ★ ★ ★ ☆";
			break;
		case 5:
			rating = "★ ★ ★ ★ ★";
			break;
		default:
			rating = "☆ ☆ ☆ ☆ ☆";
	}

	return (
		<div>
			<div>{rating}</div>
		</div>
	);
};
export default Rating;