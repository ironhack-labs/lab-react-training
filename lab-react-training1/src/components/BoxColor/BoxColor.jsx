import './BoxColor.css'
const BoxColor = ({ r, g, b, white }) => {
	const bgStyle = {
		backgroundColor: `rgb(${r},${g},${b})`,
	}

	const textColor = {
		color: white ? 'white' : 'black',
	}

	const componentToHex = c => {
		const hex = c.toString(16)
		return hex.length == 1 ? '0' + hex : hex
	}

	const rgbToHex = (r, g, b) => {
		return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
	}

	return (
		<>
			<div className='BoxColor frame' style={bgStyle}>
				<p style={textColor}>
					rgb({r},{g},{b})
				</p>
				<p style={textColor}>{rgbToHex(r, g, b)}</p>
			</div>
		</>
	)
}

export default BoxColor
