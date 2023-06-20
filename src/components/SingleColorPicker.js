
export default function SingleColorPicker({color, value, onChange}) {

    const getColor = (r, g, b) => `rgb(${r},${g},${b})`;
    const colorValue = color === "r"
                        ? getColor(value, 0, 0)
                        :  color === "g" ? getColor(0, value, 0) : getColor(0, 0, value);
    return (
        <div className="color-single">
            <div className="color-box" style={{backgroundColor: colorValue}}></div>
            <span>{color.toUpperCase()}: </span>
            <input type="number" min={0} max={255} value={value} onChange={e => onChange(e.target.value)} />
        </div>    )

}