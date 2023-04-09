function SingleColorPicker({color, value, onChange}) {

    function RGBString() {
        const r = color === "r" ? value : 0;
        const g = color === "g" ? value : 0;
        const b = color === "b" ? value : 0;
        return `rgb(${r}, ${g}, ${b})`
    }

    const style = {backgroundColor: RGBString()}

    return (
        <div className="singleColorPicker">
            <div className="colorSquare" style={style}></div>
            <div className="colorSelectDiv">
                <label>{color.toUpperCase()}:<input type="number" className="pickerInput" value={value} max={255} min={0} onChange={onChange}/></label>
            </div>
        </div>
    )
}

export default SingleColorPicker;