import './SingleColorPicker.css';

const handleBgColor = (color, colors) => {
  let { red = 0, green = 0, blue = 0 } = { [color]: colors[color] || 0 };
  return `rgb(${red},${green},${blue})`;
};

const handleChange = (colors, setColors, e) => {
  const { name, value, min, max } = e.target;
  let assignValue;
  if (+value < +min) {
    assignValue = min;
  } else if (+value > +max) {
    assignValue = max;
  } else {
    assignValue = value;
  }
  setColors({ ...colors, [name]: assignValue });
};

export default function SingleColorPicker({ color, colors, setColors }) {
  return (
    <div className="color-container">
      <div
        style={{ backgroundColor: handleBgColor(color, colors) }}
        className="color-box"
      ></div>
      <p>R:</p>
      <input
        name={color}
        value={colors[color]}
        onChange={(e) => handleChange(colors, setColors, e)}
        type="number"
        min={0}
        max={255}
      />
    </div>
  );
}
