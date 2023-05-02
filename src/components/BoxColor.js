/* eslint-disable react/prop-types */
function BoxColor( { r, g, b } ) {
	const color = [r, g, b].join( ',' );

	return (
		<div className="box-color" style={{ backgroundColor: 'rgb(' + color + ')' }}>
			<p>rgb( {color} )</p>
		</div>
	);
}

export default BoxColor;
