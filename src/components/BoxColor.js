function BoxColor(props) {
  const rgbColor = `rgb(${props.r},${props.g},${props.b})`;

  const divStyle = {
    backgroundColor: rgbColor,
  };

  return (
    <div style={divStyle}>
      <p>{rgbColor}</p>
      {/* <p></p> */}
    </div>
  );
}

export default BoxColor;
