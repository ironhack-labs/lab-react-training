function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  const hexColor = rgbToHex(props.r) + rgbToHex(props.g) + rgbToHex(props.b);
  return (
    <div class="boxcolor-container" style={divStyle}>
      <h4>{divStyle.backgroundColor}</h4>
      <h4>#{hexColor}</h4>
    </div>
  );
}

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}

export default BoxColor;
