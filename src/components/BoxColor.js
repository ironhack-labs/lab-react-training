function BoxColor(props) {
  const { r, g, b } = props;
  const color = {
    background: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div className="card" style={color}>
      <p>Color</p>
    </div>
  );
}

export default BoxColor;
