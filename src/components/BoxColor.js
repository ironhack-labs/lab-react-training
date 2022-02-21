const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        color: 'white',
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div className='BoxColor' style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
            <p>{rgbToHex(r, g, b)}</p>
        </div>
    )
}

export default BoxColor