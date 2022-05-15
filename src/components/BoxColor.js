function BoxColor(props) {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: '2px solid',
    margin: '10px',
    width: `300px`,
    height: `40px`,
  };

  return <div className="BoxColor" style={boxStyle}>
    rgb({r}, {g}, {b})
  </div>;
}

export default BoxColor;
