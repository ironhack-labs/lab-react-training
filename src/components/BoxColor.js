function BoxColor(props) {
  console.log(props);
  const { r, g, b } = props;
  function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 0) {
      r = 0 + r;
    }
    if (g.length === 0) {
      g = 0 + g;
    }
    if (b.length === 0) {
      b = 0 + b;
    }
    return '#' + r + g + b;
  }
  return (
    <div
      className="IdCard box"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <br></br>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
