import '../Styles/BoxColor.css';

// formatToHex

function isLightColor(r, g, b) {
  return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)) < 127.5;
}

function BoxColor(props) {
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        color: isLightColor(props.r, props.g, props.b) ? 'white' : 'black',
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
