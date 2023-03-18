const SingleColorPicker = ({ color, value, handleChangeColor }) => {
  let selectedColor;
  switch (color) {
    case 'r':
      selectedColor = 'red';
      break;
    case 'g':
      selectedColor = 'green';
      break;
    case 'b':
      selectedColor = 'blue';
      break;

    default:
      selectedColor = 'white';
      break;
  }

  const squareStyle = {
    backgroundColor: selectedColor,
  };

  return (
    <div className="single-container">
      <div className="color-square" style={squareStyle}>
        <div className="color-input">
          <label htmlFor="color">{color}: </label>
          <input
            type="number"
            name="color"
            id=""
            value={value}
            onChange={(e) => handleChangeColor(e.target.value, selectedColor)}
            min="0"
            max="255"
          />
        </div>
      </div>
    </div>
  );
};

SingleColorPicker.defeatProps = {
  handleChangeColor: () => {},
};

export default SingleColorPicker;
