const BoxColor = ({ r, g, b }) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div style={{
            backgroundColor: `rgb(${r},${g},${b})`
        }} className="w-50 mb-2 d-flex justify-content-center border border-dark">
            <p>rgb({r},{g},{b})</p>
            <p>{rgbToHex(r, g, b)}</p>
        </div >
    )
}

export default BoxColor;