import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)


    return (
        <div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p> rgb({r},{g},{b})</p>
            <p>{hex}</p>
        </div>
    )
}

export default BoxColor