
function BoxColor(props) {
    const { r, g, b, textColor } = props;

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        color: textColor
    }

    return (
        <div className="color-box" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
            <p></p>
        </div>
    )

}

export default BoxColor;