function BoxColor(props) {
  const { r, g, b } = props;
  const color = { backgroundColor: `rgb(${r},${g},${b}` };

  // convert rgb to hex
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  // inline style in react needs to be an object
  // hardcoded: style={{backgroundColor: "red"}}}
  return (
    <div className="color-box" style={color}>
      <div className="color-box-text">
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{rgbToHex(r, g, b)}</p>
      </div>
    </div>
  );
}
export default BoxColor;
