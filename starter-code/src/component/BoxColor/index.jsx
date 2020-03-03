import React from 'react';

const BoxColor = props => {
	const { r, g, b } = props;
	const colors = `rgb(${r}, ${g}, ${b})`;
	const value = {
		backgroundColor: colors
	};

	return (
		<div className="BoxColor box" style={value}>
			{colors}
			<br />
		</div>
	);
};

export default BoxColor;
