
const BoxColor = ({ r, g, b, }) => {
    const boxStyle = {
        width: '200px',
        height: '100px',
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
    return <div style={boxStyle}>rgb({r},{g},{b})</div>
}

export default BoxColor