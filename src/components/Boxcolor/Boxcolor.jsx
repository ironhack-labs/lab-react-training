

function Boxcolor(props) {
    const divStyle = {
        height: 200,
        width: 600,
        backgroundColor: `rgb( ${props.r}, ${props.g}, ${props.b})`
    }
    return <div style={divStyle}></div>;
}

export default Boxcolor;