function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div
      className="box-color"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <p></p>
    </div>
  );
}

export default BoxColor;
