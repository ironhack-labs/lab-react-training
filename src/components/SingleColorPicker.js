const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={color}>{color.toUpperCase()}:</label>
      <input
        id={color}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default SingleColorPicker;
