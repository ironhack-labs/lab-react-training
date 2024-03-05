
function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      className="BoxColour"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        color: 'white',
      }}
    >
      rgb({r},{g},{b})<br />
    </div>
  );
}

export default BoxColor;
