
function BoxColor({r, g, b}) {

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }


    return (
        <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <h3 className="text-center">rgb({r},{g},{b})</h3>
            <h3 className="text-center">{rgbToHex(r, g, b)}</h3>
        </div>
    );
}

BoxColor.defaultProps = {
    className: 'm-3'
}

export default BoxColor;