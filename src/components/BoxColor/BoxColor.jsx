function BoxColor({ r, g, b }) {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
    return (
        <div style={divStyle} className="border boxColor">
            rgb({r}, {g}, {b})
            <br />
            {rgbToHex(r, g, b)}
        </div>
    )
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
export default BoxColor;