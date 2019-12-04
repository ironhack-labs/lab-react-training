import React from 'react';

const BoxColor = ({ r, g, b, a }) => {
	const color = { backgroundColor: `rgba(${r},${g},${b},${a})` };
	return (
		<div className='BoxColor' style={color}>
			<p>{`rgb(${r},${g},${b})`}</p>
			<p>{`#${r.toString(16).toUpperCase()}${g.toString(16).toUpperCase()}${b
				.toString(16)
				.toUpperCase()}${a.toString(16).toUpperCase()}${a.toString(16).toUpperCase()}`}</p>
		</div>
	);
};

export default BoxColor;
