function BoxColor(props) {
  const { r, g, b } = props;
  const hexCode = rgbToHex(r, g, b);

  return (
    <div style={{ background: `rgb(${r},${g},${b})` }}>
      rgb({r}, {g}, {b})<br></br>
      {hexCode}
    </div>
  );
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default BoxColor;
