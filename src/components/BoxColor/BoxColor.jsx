import './BoxColor.css'

function BoxColor({ r, g, b }) {
    function rgbToHex(red, green, blue) {
        return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
    }

    const divStyle = {
        backgroundColor: rgbToHex(r, g, b)
    };

    return (
        <div className="boxcolor-container" style={divStyle}>
            <h4>rgb({r},{g},{b})</h4>
            <h4>{rgbToHex(r, g, b)}</h4>
        </div>
    )
};

export default BoxColor;