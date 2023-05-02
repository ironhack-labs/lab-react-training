function BoxColor(props) {
  const { r, g, b } = props;

  // Convert the RGB values to hex values
  const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  const color = `rgb(${r}, ${g}, ${b})`;

  const style = {
    backgroundColor: color,
    height: "100px",
    width: "500px",
  };

  return (
    <div style={style}>
      <p>{color}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
