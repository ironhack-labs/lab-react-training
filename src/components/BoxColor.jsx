const BoxColor = props => {
    const { r, g, b } = props 
    const BoxColor = {background: `rgb(${r},${g},${b})`}
    
    return (
        <p style={BoxColor} className='box'> rgb ({r}, {g}, {b})</p>
    )

   }
export default BoxColor