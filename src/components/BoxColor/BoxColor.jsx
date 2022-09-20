const BoxColor = ({ r, g, b }) => {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: '1px solid black',
        padding: '5px',
        height: '100px',
        textAlign: 'center',
        fontSize: 'large',
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div style={style} >
            rgb({r},{g},{b}) <br />
            {rgbToHex(r, g, b)}

        </div>
    )
}

export default BoxColor