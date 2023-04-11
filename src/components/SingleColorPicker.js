const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-1 gap-1">
      <div
        className="w-25 p-4 border border-dark"
        style={{
          backgroundColor: `rgb(${color === 'r' ? value : 0}, ${
            color === 'g' ? value : 0
          }, ${color === 'b' ? value : 0})`,
        }}
      ></div>
      <label htmlFor={color}>{color.toUpperCase()}</label>
      <input
        type="number"
        id={color}
        name={color}
        value={value}
        onChange={onChange}
        min="0"
        max="255"
      />
    </div>
  );
};

export default SingleColorPicker;
