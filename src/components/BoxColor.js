function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    padding: '0 50px',
  };

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div className="box-color" style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}

export default BoxColor;
