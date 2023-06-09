

function SingleColorPicker({ color, value, onChange }) {
  const handleValueChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 255) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label htmlFor={`${color}Value`}>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={`${color}Value`}
        value={value}
        onChange={handleValueChange}
        min={0}
        max={255}
      />
    </div>
  );
}

export default SingleColorPicker;
