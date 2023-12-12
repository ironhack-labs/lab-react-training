
function SingleColorPicker({ color, value, onChange }) {
    return (
        <div>
            <label>{color.toUpperCase()}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value, 10))}
                min="0"
                max="255"
            />
        </div>
    );
}

export default SingleColorPicker;