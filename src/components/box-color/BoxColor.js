

function BoxColor({ r, g, b }) {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    const hexCode = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return (
        <div className="card" style={{ backgroundColor: hexCode }} >
            <div className="card-body">
                <h5 className="card-title">rgb({r},{g},{b})</h5>
                <p className="card-text">{hexCode}</p>
            </div>
        </div>
    );
}

export default BoxColor;