import '../App.css';

function BoxColor(props) {
  return (
    <div
      class="color"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

export default BoxColor;
