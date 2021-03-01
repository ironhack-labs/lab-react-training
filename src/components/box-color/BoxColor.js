function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function BoxColor({ r, g, b }) {
    const divStyle = {
        background: `rgba(${r}, ${g}, ${b})`
    }
    return (
        <div className={`border border-2 border-dark p-2 text-center text-white my-2`} style={divStyle}>
            <h1>rgb: ({r},{g},{b})</h1>
            <h1>hex: # {componentToHex(r)}{componentToHex(g)}{componentToHex(b)} </h1>
        </div>
    )
}
export default BoxColor;