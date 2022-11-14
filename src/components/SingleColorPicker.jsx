function SingleColorPicker({ color, onChange, value }) {
  const bg = (color) => {
    if (color === 'r') {
      return 'red';
    }
    if (color === 'g') {
      return 'green';
    }
    if (color === 'b') {
      return 'blue';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          border: '2px solid black',
          width: '50px',
          height: '50px',
          margin: '5px',
          backgroundColor: bg(color),
          borderRadius: `${value / 10 + 5}px`,
        }}
      ></div>
      <label htmlFor={color}>{color.toUpperCase()} </label>
      <input
        onChange={onChange}
        value={value}
        style={{ width: '50px', margin: '5px' }}
        type="number"
        min={0}
        max={255}
      />
      <input
        onChange={onChange}
        value={value}
        type="range"
        min="0"
        max="255"
        step="1"
      />
    </div>
  );
}
export default SingleColorPicker;
