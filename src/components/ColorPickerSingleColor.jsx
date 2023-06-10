function ColorPickerSingleColor({ color }) {
  return (
    <div className="color-single">
      <label htmlFor={('input-', color)}>{color.toUpperCase()}</label>{' '}
      <input
        type="number"
        id={('input-', color)}
        name={('input-', color)}
        min="0"
        max="255"
      />
    </div>
  );
}

export default ColorPickerSingleColor;
