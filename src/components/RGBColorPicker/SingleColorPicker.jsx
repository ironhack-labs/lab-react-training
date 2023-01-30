function SingleColorPicker({ color, value, onChange }) {
  return (
    <div>
      <label htmlFor={color}>{color}</label>
      <input
        type="number"
        id={color}
        value={value}
        min="0"
        max="255"
        onChange={onChange}
      />
    </div>
  );
}

export default SingleColorPicker;
