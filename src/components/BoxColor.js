import "../index.css"

const BoxColor = (props) => {
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }
    return (
        <div className="rgb" style={divStyle}>rgb({props.r},{props.g},{props.b})</div>
    )
}

export default BoxColor