function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };
  
  function componentToHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  const rgbToHex =
    '#' +
    componentToHex(props.r) +
    componentToHex(props.g) +
    componentToHex(props.b);

  return (
    <div className="border" style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b}){' '}
      </p>
      <p>{rgbToHex}</p>
    </div>
  );
}

export default BoxColor;
