const SingleColorPicker = ({ color, value, onChange }) => {
    return (
        <div>
            <label>{color.toUpperCase()}:</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(color, e.target.value)}
                min="0"
                max="255"
            />
        </div>
    );
};

export default SingleColorPicker;