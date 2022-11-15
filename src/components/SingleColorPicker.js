function SingleColorPicker({ color, value, handleChange }) {
    const fieldName = `${color}Value`;
    console.log('COLOR: ', color);
    console.log('value: ', value);
    return (
      <div className="rgbField">
        <div
          className="rgbBox"
          style={
            (color === 'r' && { backgroundColor: 'red' }) ||
            (color === 'g' && { backgroundColor: 'green' }) ||
            (color === 'b' && { backgroundColor: 'blue' })
          }
        ></div>
        <label>
          {color.toUpperCase()}:
          <input
            type="number"
            name={fieldName}
            min="0"
            max="255"
            onChange={handleChange}
            value={value}
          />
        </label>
      </div>
    );
}

export default SingleColorPicker;