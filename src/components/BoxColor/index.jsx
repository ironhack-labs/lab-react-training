import './BoxColor.css';

export default function BoxColor ({r,g,b}) {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    const colorToHex = (color) => {
        const hex = color.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    const hex = `#${colorToHex(r)}${colorToHex(g)}${colorToHex(b)}`;

    return (
        <div className="BoxColor" style={divStyle}>
            <div className="BoxColor__hex">{hex}</div>
            <div className="BoxColor__rgb">rgb({r}, {g}, {b})</div>
        </div>
    )
}