function BoxColor(props) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div
      style={{ background: `rgb(${props.r} ${props.g} ${props.b})` }}
      className="BoxColor box"
    >
      rgb({props.r}, {props.g}, {props.b})<br />
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}

export default BoxColor;
