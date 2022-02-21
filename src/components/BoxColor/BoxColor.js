import "./BoxColor.css"
const BoxColor = props => {

    const { r, g, b } = props
    const coloredBox = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    const toHex = color => {
        let hex = color.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const convertToHex = (r, g, b) => {
        return "#" + toHex(r) + toHex(g) + toHex(b);
    }

    return (
        <div style={coloredBox} className="colorBox">
            <span>
                rgb({r},{g},{b}) <br />
                {convertToHex(r, g, b)}
            </span>
        </div >
    )
}
export default BoxColor