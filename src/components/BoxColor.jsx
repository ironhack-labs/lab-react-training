function BoxColor(props) {
  const color = `rgb(${props.r},${props.g},${props.b})`;
  console.log(color);
  return (
    <div style={{ backgroundColor: `${color}` }}>
      <p>{color}</p>
    </div>
  );
}

export default BoxColor;
