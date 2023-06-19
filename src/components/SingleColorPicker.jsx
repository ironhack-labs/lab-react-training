export default function SingleColorPicker(props) {
  const { color, value, onChange } = props;
  return (
    <div className="color-picker">
      <div
        className="color-picker__box"
        style={{
          backgroundColor: `rgb(${color === 'r' ? value : 0},${
            color === 'g' ? value : 0
          },${color === 'b' ? value : 0})`,
        }}
      ></div>
      <label>{color.toUpperCase()}</label>
      <input
        type="number"
        onChange={onChange}
        min="0"
        max="255"
        value={value}
      />
    </div>
  );
}
