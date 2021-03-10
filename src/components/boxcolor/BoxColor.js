function BoxColor({r, g, b}) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    const hexCode = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return (
        <div className="card max-card-width" style={{ backgroundColor: hexCode }} >
            <nav className="card-body">
                <h3 className="card-title">rgb({r},{g},{b})</h3>
                <span className="card-text">{hexCode}</span>
            </nav>
        </div>
    );
}

export default BoxColor;